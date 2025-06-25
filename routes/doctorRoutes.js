import express from 'express';
import { getAllDoctors, getDoctorProfile } from '../controllers/doctorController.js';
const router = express.Router();

router.get('/', getAllDoctors);
router.get('/:id', getDoctorProfile);

export default router;  
