import express from 'express';
import prueba from '../controllers/prueba';

const router = express.Router();

router.get('/prueba', prueba);

export default router;