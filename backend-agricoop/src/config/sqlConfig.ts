import dotenv from 'dotenv'

dotenv.config()

export const sqlConfig={
    user: process.env.DB_USER as string,
    password: process.env.DB_PWD as string,
    database: process.env.DB_NAME as string,
    server: 'localhost',
    pool:{
        min:0,
        max:10,
        idleTimeoutMillis: 30000,
    },
    options:{
        encrypt:false,
        trustedServerCertificate:false
    }
}