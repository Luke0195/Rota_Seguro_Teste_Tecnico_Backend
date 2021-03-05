import {Router} from 'express';
import courseController from '../controllers/CourserController'
import ensureUserAutenticate from '../middlewares/ensureUserIsAutenticate';

const courseRoutes = Router();

courseRoutes.get('/', ensureUserAutenticate, courseController.index);


export default courseRoutes;
