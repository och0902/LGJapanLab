import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
   name: { type: String, required: [true, 'name is required ...'] },
   email: { type: String, unique: true, required: [true, 'email is required ...'] },
   password: { type: String, required: [true, 'password is required ...'] },
   id: { type: String, },
   }, { timestamps: true }
); 

const Employees = mongoose.models.Employees || mongoose.model('Employees', employeeSchema);

export default Employees;