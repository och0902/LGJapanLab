import mongoose from 'mongoose';

// if ( !process.env.MONGODB_URL ) {
//    throw new Error('Invalid environment variable: MONGODB_URL');
// };

const connectDB = async (request, response, next) => {

   if (mongoose.connections[0].readyState) { return next(); };

   try {
      const { connection } = await mongoose.connect(process.env.MONGODB_URL, {});
      if ( connection.readyState === 1) { return Promise.resolve(true); };
   } catch (error) {
      throw new Error('could not connect to MongoDB ...');
      // return Promise.reject(error);
   };
};

export default connectDB;


