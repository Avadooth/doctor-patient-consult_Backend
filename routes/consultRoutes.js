import express from 'express';
import { createConsult, getDoctorConsults } from '../controllers/consultController.js';
const router = express.Router();
import auth from '../middlewares/auth.js';

router.post('/', auth('patient'), createConsult);
router.get('/doctor/:doctorId', auth('doctor'), getDoctorConsults);

export default router;