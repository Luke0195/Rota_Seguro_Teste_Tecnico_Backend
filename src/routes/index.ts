import 'reflect-metadata';
import dotenv from 'dotenv'
dotenv.config()
import { Router } from 'express';
import usersRoutes from '../routes/user.routes';
import sessionsRoutes from '../routes/sessions.routes';
const router = Router();


router.use('/users', usersRoutes);
router.use('/sessions', sessionsRoutes);



export default router;
