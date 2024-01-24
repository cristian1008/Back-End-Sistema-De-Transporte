"use strict";
// import { Pedidos } from "../modelos/Pedidos"
// export const listarPedidos = async (req, res) => {
//     try {
//         const dato1 = await Pedidos.findAll();
//         res.status(200).json(dato1);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// }
// export const registrarPedido = async (req, res) => {
//     try {
//         const dato1 = await Pedidos.create({
//             tipo_pedido: req.body.tipo_pedido,
//             direccion: req.body.direccion,
//             conductor_id: req.body.conductor_id
//         })
//         console.log(dato1);
//         res.status(200).json(dato1);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// }
// export const actualizarPedido = async (req, res) => {
//     try {
//         const actualizar = await Pedidos.findByPk(req.params.id);
//         if (!actualizar) {
//             return res.status(404).json({ message: "El proyecto no existe" });
//         }
//         actualizar?.set(req.body);
//         await actualizar?.save()
//         res.status(200).json(actualizar);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// }
// export const eliminarPedido = async (req, res) => {
//     try {
//         const dato1 = await Pedidos.destroy({ where: { id: req.params.id } })
//         res.status(200).json(dato1);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// }
// export const obtenerPedido = async (req, res) => {
//     try {
//         const leer = await Pedidos.findByPk(req.params.id)
//         res.status(200).json(leer);
//     } catch (error: any) {
//         res.status(500).json({ message: error.message });
//     }
// }
// // export const listarPedidosConductor = async (req, res) => {
// //     try {
// //         const dato1 = await Pedidos.findAll({
// //             where: { conductor_id: req.params.id }
// //         });
// //         res.status(200).json(dato1);
// //     } catch (error: any) {
// //         res.status(500).json({ message: error.message });
// //     }
// // }
//# sourceMappingURL=controlPedidos.js.map