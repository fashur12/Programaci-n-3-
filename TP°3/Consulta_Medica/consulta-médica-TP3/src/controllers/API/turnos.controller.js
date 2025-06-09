const turnosModel = require('../../models/sqlite/turnos.model.js');

class TurnosController {

    async obtenerTurnosPorPaciente(req, res) {
        const idPaciente = req.params.idPaciente;

        const turnos = await turnosModel.obtenerTurnosPorPaciente(idPaciente);
        if (!turnos || turnos.length === 0) {
            return res.status(404).json({ message: "No se encontraron turnos" });
        }

        res.status(200).json(turnos);
    }

    async cancelarTurno(req, res) {
        try {
            const idTurno = req.params.idTurno;
            const turnoCancelado = await turnosModel.cancelarTurno(idTurno);

            if (!turnoCancelado) {
                return res.status(404).json({ message: "Turno no encontrado o ya cancelado" });
            }

            res.status(200).json({ message: "Turno cancelado correctamente", turnoCancelado });
        } catch (error) {
            res.status(500).json({ message: "Error al cancelar turno", error: error.message });
        }
    }

    async crearTurno(req, res) {
        try {
            const { fecha, hora } = req.body;
            const idPaciente = req.user.id;

            if (!fecha || !hora) {
                return res.status(400).json({ message: "Fecha y hora son obligatorias" });
            }

            const nuevoTurno = await turnosModel.crearTurno(idPaciente, fecha, hora);

            res.status(201).json({ message: "Turno registrado correctamente", turno: nuevoTurno });
        } catch (error) {
            res.status(500).json({ message: "Error al crear turno", error: error.message });
        }
    }

    async mostrarVistaTurnos(req, res) {
        try {
            const turnos = await turnosModel.obtenerTurnosPorPaciente(req.user.id);
            res.render('turnos', { turnos });
        } catch (error) {
            res.status(500).send("Error al cargar turnos");
        }
    }

    async mostrarTurnosVista(req, res) {
        try {
            res.render('turnosVista'); // sin pasar turnos
        } catch (error) {
            res.status(500).send("Error al cargar la vista de turnos");
        }
    }   

}

module.exports = new TurnosController();
