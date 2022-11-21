import Express, {json, NextFunction, Response, Request} from 'express';
import userRouter from './routes/userRoutes';
const app = Express();
import cors from 'cors';
import RequestRouter from './routes/requestController';

app.use(cors())
app.use(json());

app.use('/user', userRouter)
app.use('/request', RequestRouter)

app.use((err:Error, req:Request, res: Response, next: NextFunction)=>{
    res.json({message: err.message});
});

app.listen(5491,()=>{
    console.log('server running')
});