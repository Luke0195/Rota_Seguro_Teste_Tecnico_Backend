import 'reflect-metadata';
import dotenv from 'dotenv'
dotenv.config()
import { Router } from 'express';
import usersRoutes from '../routes/user.routes';
import sessionsRoutes from '../routes/sessions.routes';
import courseRoutes from '../routes/course.routes';
import adminRoutes from '../routes/admin.routes';
const router = Router();


router.use('/users', usersRoutes);
router.use('/sessions', sessionsRoutes);
router.use('/courses', courseRoutes);
router.use('/admin', adminRoutes);


export default router;
