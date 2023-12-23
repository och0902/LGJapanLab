import Visitor from '@/models/Visitor';
import connectDB from '@/libs/connectDB';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST( request ) {
   const visitorData = await request.json();
   if ( !visitorData ) return NextResponse.json({ message: 'data is missing' }, { status: 400 });
   await connectDB().catch((error) => NextResponse.json(error.message, { status: 500 }));
   const exist = await Visitor.findOne ({ email: visitorData.email });
   if ( exist ) { return NextResponse.json({ message: 'email already exist ...' }, { status: 409 }) }
   else {
      const hashedPassword = await bcrypt.hash(visitorData.password, 5);
      const newVisitor = new Visitor({ ...visitorData, password: hashedPassword });

      try {
         await newVisitor.save();
         return NextResponse.json({ message: 'visitor has been created !!!' }, { status: 201 });
      } catch (error) {
         return NextResponse.json(error.message, { status: 500 }) ;
      };
   };
};
