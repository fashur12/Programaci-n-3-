const { Router } = require('express');
const TurnosController = require('../controllers/API/turnos.controller.js');
const { verifyTokenMiddleware } = require('../middlewares/verifyToken.middleware.js');

const rutaTurnos = Router();

rutaTurnos.get('/:idPaciente', verifyTokenMiddleware, TurnosController.obtenerTurnosPorPaciente);
rutaTurnos.delete('/:idTurno', verifyTokenMiddleware, TurnosController.cancelarTurno);
rutaTurnos.post('/', verifyTokenMiddleware, TurnosController.crearTurno);
rutaTurnos.get('/vista', TurnosController.mostrarTurnosVista);

module.exports = rutaTurnos;
