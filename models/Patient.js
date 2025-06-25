
import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profilePic: { type: String, default: '' },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  historySurgeries: [String],
  historyIllness: [String],
  passwordHash: { type: String, required: true },
}, { timestamps: true });
export default mongoose.model('Patient', PatientSchema);

