import { Vehiculo } from "../modelos/vehiculo"
import { Op } from 'sequelize';



//controlador de vehiculos

export const listarVehiculos = async (req, res) => {


    try {

        const dato1 = await Vehiculo.findAll();

        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}


export const registrarVehiculo = async (req, res) => {

    try {

        const dato1 = await Vehiculo.create({

            modelo: req.body.modelo,
            placa: req.body.placa,
            capacidad: req.body.capacidad,
            conductor_id: req.body.conductor_id

        })


        console.log(dato1);
        res.status(200).json(dato1);


    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }

}


export const actualizarVehiculo = async (req, res) => {


    try {


        const actualizar = await Vehiculo.findByPk(req.params.id);
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


export const eliminarVehiculo = async (req, res) => {


    try {


        const dato1 = await Vehiculo.destroy({ where: { id: req.params.id } })
        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}


export const obtenerVehiculo = async (req, res) => {

    try {

        const leer = await Vehiculo.findByPk(req.params.id)


        res.status(200).json(leer);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}



export const listarVehiculosConductor = async (req, res) => {

    try {

        const dato1 = await Vehiculo.findAll({
            where: { conductor_id: req.params.id }
        });

        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}



export const listarVehiculosConductorDistinto = async (req, res) => {

    try {

        const dato1 = await Vehiculo.findAll({
            where: { conductor_id: {[Op.not]: req.params.id} }
        });

        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}

