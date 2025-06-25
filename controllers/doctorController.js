import { get } from 'http';
import Doctor from '../models/Doctor.js';

export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find({}, 'name specialty profilePic');
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getDoctorProfile = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        res.json(doctor);
    } catch (err) {
        res.status(404).json({ error: 'Doctor not found' });
    }
};
export default {
    getAllDoctors, getDoctorProfile
};
