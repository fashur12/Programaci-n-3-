const { DataTypes } = require('sequelize');
const { sequelize } = require('../sqlite/config/db.js');

const Turno = sequelize.define('Turno', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha: DataTypes.STRING,
  hora: DataTypes.STRING,
  pacienteId: DataTypes.INTEGER,
});

const obtenerTurnosPorPaciente = async (idPaciente) => {
  return await Turno.findAll({ where: { pacienteId: idPaciente } });
};

const cancelarTurno = async (idTurno) => {
  const turno = await Turno.findByPk(idTurno);
  if (!turno) return null;
  await turno.destroy();
  return turno;
};

const crearTurno = async (pacienteId, fecha, hora) => {
  return await Turno.create({ pacienteId, fecha, hora });
};

module.exports = {
  Turno,
  obtenerTurnosPorPaciente,
  cancelarTurno,
  crearTurno,
};
