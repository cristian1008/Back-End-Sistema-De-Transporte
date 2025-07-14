import { Request } from "express";
import { Pedido } from "../../modelos/pedidos.model";

export interface pedidoCreateEntity extends Partial<Request>
{
    body: {
        tipo_pedido: string,
        direccion: string,
        conductorId: number
    }
//    params?: any;
//    query?: any;
}

export interface pedidoUpdateEntity extends Partial<Request>
{

//    body: Conductor;
    params: 
    {
        id: any | undefined;
    }

//    query?: any;



}

