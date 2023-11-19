import mongoose from 'mongoose';

const { Schema } = mongoose;

const careersSchema = new Schema({
   checkbox: { type: Boolean , default: true },
   position: { type: String, required: [true, 'position is required ...'] },
   name: { type: String, required: [true, 'name is required ...'] },
   email: { type: String, required: [true, 'email is required ...'] },
   filePaths: { type: Array, required: [true] },
   otherMatters: { type: String },
   }, { timestamps: true }
); 

const Careers = mongoose.models.Careers || mongoose.model('Careers', careersSchema);

export default Careers;