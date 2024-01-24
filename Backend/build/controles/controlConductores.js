"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerConductor = exports.eliminarConductor = exports.actualizarConductor = exports.registrarConductor = exports.listarConductores = void 0;
const Conductor_1 = require("../modelos/Conductor");
const listarConductores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dato1 = yield Conductor_1.Conductor.findAll();
        res.status(200).json(dato1);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.listarConductores = listarConductores;
const registrarConductor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dato1 = yield Conductor_1.Conductor.create({
            identificacion: req.body.identificacion,
            apellido: req.body.apellido,
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            direccion: req.body.direccion
        });
        console.log(dato1);
        res.status(200).json(dato1);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.registrarConductor = registrarConductor;
const actualizarConductor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualizar = yield Conductor_1.Conductor.findByPk(req.params.id);
        if (!actualizar) {
            return res.status(404).json({ message: "El proyecto no existe" });
        }
        actualizar === null || actualizar === void 0 ? void 0 : actualizar.set(req.body);
        yield (actualizar === null || actualizar === void 0 ? void 0 : actualizar.save());
        res.status(200).json(actualizar);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.actualizarConductor = actualizarConductor;
const eliminarConductor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dato1 = yield Conductor_1.Conductor.destroy({ where: { id: req.params.id } });
        res.status(200).json(dato1);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.eliminarConductor = eliminarConductor;
const obtenerConductor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leer = yield Conductor_1.Conductor.findByPk(req.params.id);
        res.status(200).json(leer);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.obtenerConductor = obtenerConductor;
//# sourceMappingURL=controlConductores.js.map