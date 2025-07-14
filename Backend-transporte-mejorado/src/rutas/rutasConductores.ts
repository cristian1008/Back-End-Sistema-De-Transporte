import {Router} from "express";
import {listarConductores, registrarConductor, actualizarConductor, eliminarConductor, obtenerConductor} from "../controles/controlConductores";


//instanciacion de las rutas de conductores
export const RutasConductores = Router();


//comandos generales para manipular la tabla conductores
//peticion para listar conductores
RutasConductores.get("/listarConductores", listarConductores);

//peticion para registrar conductores
RutasConductores.post("/registrarConductor", registrarConductor);

//peticion para actualizar conductores
RutasConductores.put("/actualizarConductor/:id", actualizarConductor);

//peticion para eliminar conductores
RutasConductores.delete("/eliminarConductor/:id", eliminarConductor);

//peticion para obtener conductores por id
RutasConductores.get("/obtenerConductor/:id", obtenerConductor);





