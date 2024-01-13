import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
   throw new Error('Invalid environment variable: MONGODB_URL');
   };

const options = {};

async function connectDB () {
   if (mongoose.connection.readyState >= 1) {
      return mongoose;
   };

   const db = await mongoose.connect(MONGODB_URL, options);

   return db;
};

export default connectDB;