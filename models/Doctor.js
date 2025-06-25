
import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profilePic: String,
  specialty: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  experience: { type: Number, required: true },
  passwordHash: { type: String, required: true },
});
export default mongoose.model('Doctor', DoctorSchema);

