import { Pedido } from "../modelos/pedidos.model"
import { Op } from 'sequelize';
import {requestEntity, responseEntity, pedidoCreateEntity, pedidoUpdateEntity } from "../interface/index";

//controlador de pedidos
export const listarPedidos = async (_req: requestEntity, res: responseEntity) => {

    try {

        const dato1 = await Pedido.findAll();

        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}


export const registrarPedido = async (req: pedidoCreateEntity, res: responseEntity) => {

    try {

        const dato1 = await Pedido.create({

            tipo_pedido: req.body.tipo_pedido,
            direccion: req.body.direccion,
            conductorId: req.body.conductorId

        })


        console.log(dato1);
        res.status(200).json(dato1);


    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }

}


export const actualizarPedido = async (req: pedidoUpdateEntity, res: any) => {


    try {


        const actualizar = await Pedido.findByPk(req.params.id);
        if (!actualizar) {

            return res.status(404).json({ message: "El proyecto no existe" });

        }

        actualizar?.set(req.body);

        await actualizar?.save()

        res.status(200).json(actualizar);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}


export const eliminarPedido = async (req: pedidoUpdateEntity, res: responseEntity) => {


    try {


        const dato1 = await Pedido.destroy({ where: { id: req.params.id } })
        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}


export const obtenerPedido = async (req: pedidoUpdateEntity, res: responseEntity) => {

    try {

        const leer = await Pedido.findByPk(req.params.id)


        res.status(200).json(leer);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}




export const listarPedidosConductor = async (req: pedidoUpdateEntity, res: responseEntity) => {

    try {

        const dato1 = await Pedido.findAll({
            where: { conductor_id: req.params.id }
        });

        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}





export const listarPedidosConductorDistinto = async (req: pedidoUpdateEntity, res: responseEntity) => {

    try {

        const dato1 = await Pedido.findAll({
            where: { conductor_id: {[Op.not]: req.params.id} }
        });

        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}

