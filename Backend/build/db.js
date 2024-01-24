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
exports.conexionBD = void 0;
// import Sequelize from "sequelize";
const sequelize_typescript_1 = require("sequelize-typescript");
const Conductor_1 = require("./modelos/Conductor");
const Pedidos_1 = require("./modelos/Pedidos");
const vehiculo_1 = require("./modelos/vehiculo");
const sequelize = new sequelize_typescript_1.Sequelize({
    database: "Transporte_DB",
    username: "postgres",
    password: "123456",
    host: "localhost",
    dialect: "postgres",
    logging: false,
    models: [Pedidos_1.Pedidos, Conductor_1.Conductor, vehiculo_1.Vehiculo]
});
function conexionBD() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.sync();
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.conexionBD = conexionBD;
//# sourceMappingURL=db.js.map