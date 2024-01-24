"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const rutasConductores_1 = require("./rutas/rutasConductores");
// import {RutasVehiculos} from './rutas/rutasVehiculos';
// import {RutasPedidos} from './rutas/rutasPedidos';
const api = (0, express_1.default)();
api.use((0, cors_1.default)());
api.use(body_parser_1.default.json());
api.use(body_parser_1.default.urlencoded({ extended: true }));
api.use("/conductores", rutasConductores_1.RutasConductores);
// api.use("/vehiculos", RutasVehiculos);
// api.use("/pedidos", RutasPedidos);
//     api.use((req, res) => {
// res.redirect("/");
// });
exports.default = api;
//# sourceMappingURL=api.js.map