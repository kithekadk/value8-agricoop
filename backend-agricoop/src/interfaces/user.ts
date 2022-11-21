import {Request} from 'express';

export interface customUser extends Request{
    body:{
        firstname: string;
        lastname: string;
        email: string;
        phonenumber: string;
        password: string;
    }
}