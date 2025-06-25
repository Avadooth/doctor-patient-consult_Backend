import mongoose from 'mongoose';
const ConsultSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  step1: {
    illness: String,
    recentSurgery: String,
  },
  step2: {
    diabetic: Boolean,
    allergies: String,
    others: String,
  },
  payment: {
    qrCodeUrl: String,
    transactionId: String,
  },
}, { timestamps: true });
export default mongoose.model('Consult', ConsultSchema);


