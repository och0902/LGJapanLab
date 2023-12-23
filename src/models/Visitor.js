import mongoose from 'mongoose';

const { Schema } = mongoose;

const visitorSchema = new Schema({
   email: { type: String, unique: true, required: [true, 'email is required ...'] },
   password: { type: String, required: [true, 'password is required ...'] },
   name: { type: String, required: [true, 'name is required ...'] },
   mobile: { type: String, },
   company: { type: String, },
   position: { type: String, },
   }, { timestamps: true }
); 

const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', visitorSchema);

export default Visitor;