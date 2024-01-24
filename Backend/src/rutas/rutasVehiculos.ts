import {Router} from "express";
import {listarVehiculos, registrarVehiculo, actualizarVehiculo, eliminarVehiculo, obtenerVehiculo, listarVehiculosConductor, listarVehiculosConductorDistinto} from "../controles/controlVehiculos";



//instanciacion de las rutas de vehiculos

export const RutasVehiculos = Router();


//comandos generales para manipular la tabla vehiculos
//peticion para listar vehiculos
RutasVehiculos.get("/listarVehiculos", listarVehiculos);

//peticion para registrar vehiculos
RutasVehiculos.post("/registrarVehiculo", registrarVehiculo);

//peticion para actualizar vehiculos
RutasVehiculos.put("/actualizarVehiculo/:id", actualizarVehiculo);

//peticion para eliminar vehiculos
RutasVehiculos.delete("/eliminarVehiculo/:id", eliminarVehiculo);

//peticion para obtener vehiculos por id
RutasVehiculos.get("/obtenerVehiculo/:id", obtenerVehiculo);


//rutas de listar vehiculos relacionados con un id de conductor
//desasociar conductor al vehiculo
RutasVehiculos.get("/listarVehiculosConductor/:id", listarVehiculosConductor);
//asociar conductor al vehiculo
RutasVehiculos.get("/listarVehiculosConductorDistinto/:id", listarVehiculosConductorDistinto);



