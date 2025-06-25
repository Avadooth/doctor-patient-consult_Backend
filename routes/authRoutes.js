import express from 'express';
import {
  doctorSignup,
  doctorLogin,
  patientSignup,
  patientLogin
} from '../controllers/authController.js';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

const router = express.Router();

router.post('/doctor/signup', upload.single('profilePic'), doctorSignup);
router.post('/doctor/login', doctorLogin);
router.post('/patient/signup', upload.single('profilePic'), patientSignup);
router.post('/patient/login', patientLogin);

export default router;