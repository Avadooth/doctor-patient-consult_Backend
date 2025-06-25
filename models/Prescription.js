import mongoose from 'mongoose';

const PrescriptionSchema = new mongoose.Schema({
  consult: { type: mongoose.Schema.Types.ObjectId, ref: 'Consult', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  care: { type: String, required: true },
  medicines: String,
  pdfUrl: String,
}, { timestamps: true });
export default mongoose.model('Prescription', PrescriptionSchema);

