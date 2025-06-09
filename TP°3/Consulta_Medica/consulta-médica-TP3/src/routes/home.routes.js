const {Router} = require('express');
const {home} = require('../controllers/home/home.controller.js')
const rutaHome = Router();
const pacientesModel = require('../models/sqlite/paciente.model.js');
const turnosModel = require('../models/sqlite/turnos.model.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
rutaHome.get('/', home);
//Otras rutas CRUD

// Mostrar formularios
rutaHome.get('/login', (req, res) => res.render('login'));
rutaHome.get('/register', (req, res) => res.render('register'));

rutaHome.get('/turnos/vista', (req, res) => {
  res.render('turnos');
});

// Registro de usuario

rutaHome.post('/register', async (req, res) => {
  try {
    await pacientesModel.create(req.body);
    res.redirect('/login');
  } catch (err) {
    console.error("Error al registrar:", err);
    res.status(400).render('register', { error: 'No se pudo registrar el usuario.' });
  }
});

// Login de usuario
rutaHome.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pacientesModel.findByEmail(email, password);
    if (!user) throw new Error("Usuario inválido");

    const token = jwt.sign({ id: user.id, email: user.email }, config.secreteWord, {
      expiresIn: config.expiresIn
    });

    console.log("Token generado:", token); 

    res.json({ token, id: user.id });
  } catch (err) {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
});

// Agregar turno
rutaHome.post('/agregar_turno', async (req, res) => {
  const { nombre, fecha } = req.body;

  try {
    await turnosModel.create({ nombre, fecha });
    res.redirect('/turnos');
  } catch (err) {
    res.status(500).render('turnos', { error: 'Error al agregar el turno', turnos: [] });
  }
});

// Eliminar turno
rutaHome.post('/eliminar_turno', async (req, res) => {
  const { turno_id } = req.body;

  try {
    await turnosModel.delete(turno_id);
    res.redirect('/turnos');
  } catch (err) {
    res.status(500).render('turnos', { error: 'Error al eliminar el turno', turnos: [] });
  }
});

module.exports = rutaHome;
