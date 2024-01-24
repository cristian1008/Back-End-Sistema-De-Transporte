"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const api_1 = __importDefault(require("./api"));
const db_1 = require("./db");
(0, db_1.conexionBD)();
try {
    api_1.default.listen(config_1.PORT, () => {
        console.log(`El servidor esta corriendo el el puerto: ${config_1.PORT}`);
    });
}
catch (error) {
    console.log(`Error: ${error}`);
}
//# sourceMappingURL=index.js.map