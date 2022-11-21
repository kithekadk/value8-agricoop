import {Response} from "express";
import { customUser } from "../interfaces/user";
import mssql, { RequestError } from 'mssql';
import {sqlConfig} from "../config/sqlConfig";

export const newUser = async(req:customUser, res:Response)=>{
    try{
        let {firstname, lastname, email, password, phonenumber} = req.body
        
        const pool = await mssql.connect(sqlConfig)

        await pool.request()
        .input ('firstname', mssql.VarChar, firstname)
        .input ('lastname', mssql.VarChar, lastname)
        .input ('email', mssql.VarChar, email)
        .input ('phonenumber', mssql.VarChar, phonenumber)
        .input ('password', mssql.VarChar, password)
        .execute('createUser');

        return res.json({message: 'User created successfully...'})
    }catch(error){
        if(error instanceof RequestError){
            res.json({
                message: error.message
            })
        }
    }
}