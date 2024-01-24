"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutasConductores = void 0;
const express_1 = require("express");
const controlConductores_1 = require("../controles/controlConductores");
exports.RutasConductores = (0, express_1.Router)();
exports.RutasConductores.get("/listarConductores", controlConductores_1.listarConductores);
exports.RutasConductores.post("/registrarConductor", controlConductores_1.registrarConductor);
exports.RutasConductores.put("/actualizarConductor/:id", controlConductores_1.actualizarConductor);
exports.RutasConductores.delete("/eliminarConductor/:id", controlConductores_1.eliminarConductor);
exports.RutasConductores.get("/obtenerConductor/:id", controlConductores_1.obtenerConductor);
//# sourceMappingURL=rutasConductores.js.map