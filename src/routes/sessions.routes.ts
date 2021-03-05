import { Router } from 'express';
import sessionController from '../controllers/SessionsController'

import ensureUserAuthenticate from '../middlewares/ensureUserIsAutenticate'
const sessionsRoutes = Router();


sessionsRoutes.post('/',sessionController.store);
export default sessionsRoutes;
