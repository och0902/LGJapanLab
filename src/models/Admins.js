import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
   name: { type: String, required: [true, 'name is required ...'] },
   email: { type: String, unique: true, required: [true, 'email is required ...'] },
   password: { type: String, required: [true, 'password is required ...'] },
   role: { type: String, },
   }, { timestamps: true }
); 

const Admins = mongoose.models.Admins || mongoose.model('Admins', adminSchema);

export default Admins;