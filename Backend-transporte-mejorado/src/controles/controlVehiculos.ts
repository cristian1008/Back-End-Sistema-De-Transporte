import { Vehiculo, VehiculoSchema } from "../modelos/vehiculos.model"
import { sequelize } from "../db";
import { Op } from 'sequelize';
import {requestEntity, responseEntity, vehiculoCreateEntity, vehiculoUpdateEntity, vehiculoConductorUpdateEntity} from "../interface/index";
import { Conductor } from "../modelos/conductores.model";
import { ConductorVehiculo } from "../modelos/conductor_has_vehiculo";
import {vehiculoResp} from "../interface/vehiculos/vehiculo";
import { SequelizeMethod } from "sequelize/types/utils";



//controlador de vehiculos

export const listarVehiculos = async (_req: requestEntity, res: responseEntity) => {


    try {

        const dato1 = await Vehiculo.findAll();

        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}


export const registrarVehiculo = async (req: vehiculoCreateEntity, res: responseEntity) => {

    try {

        const dato1 = await Vehiculo.create({

            modelo: req.body.modelo,
            placa: req.body.placa,
            capacidad: req.body.capacidad

        })


        console.log(dato1);
        res.status(200).json(dato1);


    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }

}


export const actualizarVehiculo = async (req: vehiculoUpdateEntity, res: any) => {


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


export const eliminarVehiculo = async (req: vehiculoUpdateEntity, res: responseEntity) => {


    try {


        const dato1 = await Vehiculo.destroy({ where: { id: req.params.id } })
        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}


export const obtenerVehiculo = async (req: vehiculoUpdateEntity, res: responseEntity) => {

    try {

        const leer = await Vehiculo.findByPk(req.params.id)


        res.status(200).json(leer);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}



export const listarVehiculosConductor = async (req: vehiculoUpdateEntity, res: responseEntity) => {

    try {

        const dato1 = await Conductor.findOne({

            attributes: [],
            include: [
                {
                    as: "vehiculo",
                    attributes: ["id", "modelo", "placa", "capacidad"],
                    model: Vehiculo,
                    through: {attributes:[]},

                }
            ],

            where: { id: req.params.id }
        });

        const {vehiculo} = dato1?.dataValues;
        res.status(200).json(vehiculo);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}



// export const listarVehiculosConductorDistinto = async (req: vehiculoUpdateEntity, res: responseEntity) => {

//     try {

//         const dato1 = await Vehiculo.findAll({

//             attributes: ["id", "modelo"],
//             include: [
//                 {
//                     as: "conductor",
//                     attributes: ["id", "nombre", "apellido"],
//                     model: Conductor,
//                     // through: {where: { conductorId: {[Op.is]: null} }},
//                     // attributes:[],

//                 },
//             ],
//         });


//         const resultado = dato1 as vehiculoResp[];



//         const valor = resultado.filter(persona => persona.conductor?.length == 0);

//         // const {vehiculo} = dato1?.dataValues;
//         res.status(200).json(valor);

//     } catch (error: any) {

//         res.status(500).json({ message: error.message });

//     }


// }


export const quitarConductorVehiculo = async (req: vehiculoConductorUpdateEntity, res: responseEntity)=>{


    try {

        const valor1 = req.body
        const dato1 = await ConductorVehiculo.destroy({ where: { [Op.and]: {conductorId: valor1.conductorId, vehiculoId: valor1.vehiculoId}} })
        res.status(200).json(dato1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }



}








export const listarVehiculosConductorDistinto = async (req: vehiculoUpdateEntity, res: responseEntity) => {

    try {

        const rsta = await ConductorVehiculo.findAll({
           attributes: ["vehiculoId"]
        })
        // console.log(rsta);

    const valor1 = rsta.map((registro)=>{
        return registro.dataValues.vehiculoId
    }
);



        // const [data1] = await sequelize.query(`SELECT * FROM "vehiculos" WHERE "id" NOT IN (SELECT "vehiculo_id" FROM "Conductores_Vehiculos")`);

      const [data1] = await sequelize.query(`SELECT * FROM "vehiculos" WHERE "id" NOT IN (${valor1})`);

        res.status(200).json(data1);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }

}




export const adicionConductorVehiculo = async (req: vehiculoUpdateEntity, res: responseEntity)=>{


    try {


        const body = req.body;


        const rsta = await ConductorVehiculo.bulkCreate(
            body
        );


//        const [data1] = await sequelize.query(`SELECT * FROM "vehiculos" WHERE "id" NOT IN (SELECT "vehiculo_id" FROM "Conductores_Vehiculos")`);
console.log(rsta);
        res.status(200).json(rsta);

    } catch (error: any) {

        res.status(500).json({ message: error.message });

    }


}





