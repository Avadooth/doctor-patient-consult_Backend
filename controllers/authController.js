import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Doctor from '../models/Doctor.js';
import Patient from '../models/Patient.js';


const generateToken = (userId, role) =>
  jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: '7d' });



const signup = (Model, role) => async (req, res) => {
  try {
    const { password, ...data } = req.body;
    const profilePicPath = req.file?.path || null;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await Model.create({ ...data, passwordHash, profilePic: profilePicPath, });
    const token = generateToken(user._id, role);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = (Model, role) => async (req, res) => {
  const { email, password } = req.body;
  const user = await Model.findOne({ email });
  if (!user) return res.status(404).json({ error: 'Your email or password is incorrect. Please try again' });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ error: 'Your email or password is incorrect. Please try again' });

  const token = generateToken(user._id, role);
  res.json({ token });
};



export const doctorSignup = signup(Doctor, 'doctor');
export const doctorLogin = login(Doctor, 'doctor');
export const patientSignup = signup(Patient, 'patient');
export const patientLogin = login(Patient, 'patient');
