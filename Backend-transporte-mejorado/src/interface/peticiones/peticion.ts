import { NextFunction, Request, Response } from "express";

export interface requestEntity extends Request
{

//    body?: any;
//    params?: any;
//    query?: any;

}


export interface responseEntity extends Response
{



}

export interface HttpResponse {
    statusCode: number;
    body: any;
    success: boolean;
    message: string;
  }
  
  export interface HttpRequest {
    body?: any;
    params?: any;
    query?: any;
  }
  export interface HttpNext {
    next: NextFunction;
  }
