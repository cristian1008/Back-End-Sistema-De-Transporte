import { Request, Response } from "express";
import { Conductor } from "../../modelos/conductores.model";

export interface conductorCreateEntity extends Partial<Request>
{

    body: {

        identificacion: String,
        apellido: String,
        nombre: String,
        telefono: String,
        direccion: String

    }
//    params?: any;
//    query?: any;



}

export interface conductorUpdateEntity extends Partial<Request>
{

//    body: Conductor;
    params: 
    {

        id: any | undefined;

    }

//    query?: any;



}


// export interface conductorResponseEntity extends Response
// {

// body: Conductor | undefined

// }

