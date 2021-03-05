import { Router } from 'express';
import adminController from '../controllers/AdminController';
import ensureAdminIsAutenticate from '../middlewares/ensureAdminIsAutenticate';

const adminRouter = Router();


adminRouter.get('/', ensureAdminIsAutenticate,adminController.index);


export default adminRouter;
