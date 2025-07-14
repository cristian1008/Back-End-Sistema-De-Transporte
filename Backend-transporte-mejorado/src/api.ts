import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {RutasConductores} from './rutas/rutasConductores';
import {RutasVehiculos} from './rutas/rutasVehiculos';
import {RutasPedidos} from './rutas/rutasPedidos';
const api = express();


//archivo para enlazar rutas y separar la parte funcional de la aplicación
api.use(cors());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true}));
api.use("/conductores", RutasConductores);
api.use("/vehiculos", RutasVehiculos);
api.use("/pedidos", RutasPedidos);

//     api.use((req, res) => {

// res.redirect("/");

// });







export default api;