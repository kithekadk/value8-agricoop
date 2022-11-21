import {Response} from "express";
import { farmerRequest } from "../interfaces/FarmerRequest";
import mssql, { RequestError } from 'mssql';
import {sqlConfig} from "../config/sqlConfig";

export const createRequest = async(req: farmerRequest, res: Response)=>{
    try {
        const {requestCreator, productName,productPrice,productQuantity, productCategory,productUrl}= req.body

        const pool = await mssql.connect(sqlConfig)

        await pool.request()
        .input ('requestCreator', mssql.VarChar, requestCreator)
        .input ('productName', mssql.VarChar, productName)
        .input ('productPrice', mssql.Int, productPrice)
        .input ('productQuantity', mssql.Int, productQuantity)
        .input ('productCategory', mssql.VarChar, productCategory)
        .input ('productUrl', mssql.VarChar, productUrl)
        .execute('createRequest');

        return res.json({message: 'Request created successfully...'})
    } catch (error) {
        if(error instanceof RequestError){
            res.json({
                message: error.message
            })
        }
    }
}

export const getRequests= async(req:farmerRequest, res:Response)=>{
    try {
        const pool= await mssql.connect(sqlConfig)

        const requests = (await pool.request()
        .execute('getALLRequests')).recordset

        return res.json(requests)
    } catch (error) {
        if(error instanceof RequestError){
            res.json({
                message: error.message
            })
        }
    }
}