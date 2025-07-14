import { Request } from "express";
import { Vehiculo } from "../../modelos/vehiculos.model";
import {ConductorVehiculo} from "../../modelos/conductor_has_vehiculo";

export interface vehiculoCreateEntity extends Partial<Request>
{

    body: {
        modelo: string,
        placa: string,
        capacidad: string
    }
//    params?: any;
//    query?: any;



}

export interface vehiculoUpdateEntity extends Partial<Request>
{

//    body: Conductor;
    params: 
    {

        id: any | undefined;

    }

//    query?: any;



}


export interface vehiculoConductorUpdateEntity extends Partial<Request>
{

//    body: Conductor;
    params: 
    {

        id: any | undefined

    }

    query: 
    {

        conductor: any | undefined,
        vehiculo: any | undefined

    }

//    query?: any;



}





interface ConductorTipo extends Partial<ConductorVehiculo>{

id: number,
conductorId: number,
vehiculoId: number
    
}



export interface vehiculoResp extends Partial<Vehiculo>
{

//    body: Conductor;
    conductor?: ConductorTipo[];

//    query?: any;



}


