import {Router} from "express";
import {listarPedidos, registrarPedido, actualizarPedido, eliminarPedido, obtenerPedido, listarPedidosConductor, listarPedidosConductorDistinto} from "../controles/controlPedidos";

//instanciacion de las rutas de pedidos
export const RutasPedidos = Router();

//comandos generales para manipular la tabla pedidos
//peticion para listar pedidos
RutasPedidos.get("/listarPedidos", listarPedidos);

//peticion para registrar pedidos
RutasPedidos.post("/registrarPedido", registrarPedido);

//peticion para actualizar pedidos
RutasPedidos.put("/actualizarPedido/:id", actualizarPedido);

//peticion para eliminar pedidos
RutasPedidos.delete("/eliminarPedido/:id", eliminarPedido);

//peticion para obtener pedidos por id
RutasPedidos.get("/obtenerPedido/:id", obtenerPedido);


//rutas de listar pedidos relacionados con un id de conductor
//desasociar conductor al pedido
RutasPedidos.get("/listarPedidosConductor/:id", listarPedidosConductor);
//asociar conductor al pedido
RutasPedidos.get("/listarPedidosConductorDistinto/:id", listarPedidosConductorDistinto);



