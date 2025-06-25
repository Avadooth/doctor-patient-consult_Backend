import express from 'express';
const router = express.Router();
import {
    createPrescription,
    getDoctorPrescriptions,
    updatePrescription,
} from '../controllers/prescriptionController.js';


import auth from '../middlewares/auth.js';

router.post('/', auth('doctor'), createPrescription);
router.get('/doctor/:doctorId', auth('doctor'), getDoctorPrescriptions);
router.put('/:id', auth('doctor'), updatePrescription);

export default router;