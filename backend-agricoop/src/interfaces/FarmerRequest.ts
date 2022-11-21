import { Request } from "express";


export interface farmerRequest extends Request{
    body:{
        requestCreator: string;
        productName: string;
        productQuantity: number;
        productPrice: number;
        productCategory:string;
        productUrl:string;
    }
}