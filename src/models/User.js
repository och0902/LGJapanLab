import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
   name: { type: String, required: [true, 'name is required ...'] },
   email: { type: String, unique: true, required: [true, 'email is required ...'] },
   password: { type: String, required: [true, 'password is required ...'] },
   }, { timestamps: true }
); 

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;