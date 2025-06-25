import Prescription from '../models/Prescription.js';
import  { generatePdfAndSave } from '../utils/pdfGenerator.js';

export const createPrescription = async (req, res) => {
  try {
    const { consult, doctor, patient, care, medicines } = req.body;

    const pdfUrl = await generatePdfAndSave({ consult, doctor, patient, care, medicines });
    const prescription = await Prescription.create({ consult, doctor, patient, care, medicines, pdfUrl });

    res.status(201).json(prescription);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getDoctorPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({ doctor: req.params.doctorId }).populate('patient consult');
    res.json(prescriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePrescription = async (req, res) => {
  try {
    const { care, medicines } = req.body;
    const prescription = await Prescription.findById(req.params.id);
    if (!prescription) return res.status(404).json({ error: 'Prescription not found' });

    prescription.care = care;
    prescription.medicines = medicines;
    prescription.pdfUrl = await generatePdfAndSave(prescription);
    await prescription.save();

    res.json(prescription);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default {
  createPrescription,
    getDoctorPrescriptions,
    updatePrescription
};
