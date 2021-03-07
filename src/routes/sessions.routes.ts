import { Router } from 'express';
import sessionController from '../controllers/SessionsController'


const sessionsRoutes = Router();


sessionsRoutes.post('/',sessionController.store);
export default sessionsRoutes;
