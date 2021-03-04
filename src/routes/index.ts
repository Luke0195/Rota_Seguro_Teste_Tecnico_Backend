import 'reflect-metadata';
import { Router } from 'express';
import usersRoutes from '../routes/user.routes';
const router = Router();


router.use('/users', usersRoutes)



export default router;
