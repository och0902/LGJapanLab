import User from '@/models/User';
import connectDB from '@/libs/connectDB';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

const handler = async ( request ) => {

   await connectDB().catch((err) => new NextResponse(err.message, { status: 500 }));

   const userData = await request.json();

   if ( !userData ) return new NextResponse('data is missing', { status: 400 });

   const { name, email, password } = userData;

   const exist = await User.findOne ({ email });
   if ( exist ) { 
      return new NextResponse('email already exist ...', { status: 409 });

   } else {
      const hashedPassword = await bcrypt.hash(password, 5);
      const newUser = new User(
         { name, email, password: hashedPassword }
      );

      try {
         await newUser.save();
         return new NextResponse('user has been created !!!', { status: 201 });

      } catch (err) {
         return new NextResponse(err.message, { status: 500 }) ;
      };
   };

};

export { handler as POST };