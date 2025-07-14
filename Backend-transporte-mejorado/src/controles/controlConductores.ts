import { Conductor } from "../modelos/conductores.model";
import {requestEntity, responseEntity, conductorCreateEntity, conductorUpdateEntity } from "../interface/index";
import { Response } from "express";

//controlador de conductores
export const listarConductores = async (_req:requestEntity, res: responseEntity) => {

    try {

        const dato1 = await Conductor.findAll();

        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}


export const registrarConductor = async (req:conductorCreateEntity, res: responseEntity) => {

    try {
        
        const dato1 = await Conductor.create({

            identificacion: req.body.identificacion,
            apellido: req.body.apellido,
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            direccion: req.body.direccion

        })


        console.log(dato1);
        res.status(200).json(dato1);


    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }

}


export const actualizarConductor = async (req: conductorUpdateEntity, res: any) => {


    try {


        const actualizar = await Conductor.findByPk(req.params.id);
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


export const eliminarConductor = async (req: conductorUpdateEntity, res: Response) => {


    try {


        const dato1 = await Conductor.destroy({ where: { id: req.params.id } })
        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}


export const obtenerConductor = async (req: conductorUpdateEntity, res: responseEntity) => {

    try {

        const leer = await Conductor.findByPk(req.params.id)


        res.status(200).json(leer);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}