import Visitor from '@/models/Visitor';
import connectDB from '@/libs/connectDB';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST( request ) {
   const visitorData = await request.json();
   if ( !visitorData ) return NextResponse.json({ message: 'data is missing' }, { status: 400 });
   await connectDB().catch((error) => NextResponse.json(error.message, { status: 500 }));
   try {
      const visitor = await Visitor.findOne({ email: visitorData.email });
      const passwordMatched = await bcrypt.compare( visitorData.password, visitor.password );
      if ( !visitor ) {
         new NextResponse('visitor not found ...', { status: 500 });     
      } else if ( !passwordMatched ) {
         new NextResponse('visitor is not signed up ...', { status: 500 });
      } else {
         return NextResponse.json( { ...visitor, auth: 'authenticated', message: 'success', status: 200 } );
      };
   } catch (error) {
      new NextResponse(error.message, { status: 500 }) ;
   };
};