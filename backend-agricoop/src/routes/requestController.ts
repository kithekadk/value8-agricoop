import { Router } from "express";
import { createRequest, getRequests } from "../controllers/requestController";

const RequestRouter = Router();

RequestRouter.post('/createrequest', createRequest);
RequestRouter.get('/getrequests', getRequests);

export default RequestRouter;