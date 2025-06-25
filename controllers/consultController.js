import Consult from '../models/Consult.js';


export const createConsult = async (req, res) => {
    try {
        const newConsult = await Consult.create(req.body);
        res.status(201).json(newConsult);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getDoctorConsults = async (req, res) => {
    try {
        const consults = await Consult.find({ doctor: req.params.doctorId }).populate('patient');
        res.json(consults);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
export default {
    createConsult, getDoctorConsults
};
