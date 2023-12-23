import mongoose from 'mongoose';

const careersSchema = new mongoose.Schema({
   name: { type: String, required: [true, 'name is required ...'] },
   email: { type: String, required: [true, 'email is required ...'] },
   mobile: { type: String, required: [true, 'mobile phone number is required ...'] },
   position: { type: String, required: [true, 'position is required ...'] },
   files: { type: Array, required: [true,'file paths are required ...'] },
   otherMatters: { type: String },
   privacyCheck: { type: Boolean , default: true },
   recruitmentStatus: { type: String },
   }, { timestamps: true }
); 

const Careers = mongoose.models.Careers || mongoose.model('Careers', careersSchema);

export default Careers;