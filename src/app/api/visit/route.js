import connectDB from '@/libs/connectDB';
import VisitInfos from '@/models/VisitInfos';
import nodemailer from 'nodemailer';
import { docSubmit, docReply } from './doc';
import { NextResponse } from 'next/server';

export async function POST( request ) { 
   
   const visitInfo = await request.json();

   // try {
   //    await connectDB();
   //    await VisitInfos.create(visitInfo);
   // } catch (error) {
   //    // console.log(error);
   //    return NextResponse.json({ message: error.message, status: error.status || 500 });
   // };

   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { 
         user: process.env.TRANSPORTER_USER, 
         pass: process.env.TRANSPORTER_PASSWORD, 
      },
   });

   const docSubmitEmail = docSubmit( visitInfo );

   try {
      const response = await transporter.sendMail({
         from: visitInfo.email,
         to: process.env.VISIT_RECEIVER_ADDRESS,
         subject: 'Visit application data has been submitted.',
         text: `${visitInfo.name}'s Data`,
         html: docSubmitEmail,
      });
      if( !response.response.split(' ').includes('OK') ) {
         throw new Error( 'email sending failure' );
      };
   } catch (error) {
      return NextResponse.json({ message: error.message, status: error.status || 500 });
   };

   const docReplyEmail = docReply();

   try {
      const response = await transporter.sendMail({
         from: process.env.VISIT_RECEIVER_ADDRES,
         to: visitInfo.email,
         subject: 'We have received your visit application.',
         text: `${visitInfo.name}'s Data`,
         html: docReplyEmail,
      });
      if( response.response.split(' ').includes('OK') ) {
         return NextResponse.json({ message: 'data processed successfully', status: 200 });
      } else {
         throw new Error( 'reply-email sending failure' );
      };
   } catch (error) {
      return NextResponse.json({ message: error.message, status: error.status || 500 });
   };
};


export async function GET( request ) {

   const visitor = Object.fromEntries(request.nextUrl.searchParams);

   if ( !visitor ) return NextResponse.json({ message: 'requested visitor data is missing', status: 400 });

   try {
      await connectDB();
      const visitInfo = await VisitInfos.findOne({ email: visitor.email, mobile: visitor.mobile })
      if ( !visitInfo ) {
         throw new Error ( 'not found' );     
      } else {
         return NextResponse.json({ message: 'success', status: 200, ...visitInfo });
      };
   } catch (error) {
      return NextResponse.json({ message: error.message, status: error.status || 500 });
   };
};


export async function PUT( request ) { 
   
   let visitInfo = await request.json();

   try {
      await connectDB();
      const modifiedVisitInfo = await VisitInfos.findByIdAndUpdate( visitInfo._id, visitInfo )
      if ( !modifiedVisitInfo ) {
         throw new Error ( 'not found' );     
      } else {
         return NextResponse.json({ message: 'success', status: 201, ...modifiedVisitInfo });
      };
   } catch (error) {
      return NextResponse.json({ message: error.message, status: error.status || 500 });
   };
};


export async function DELETE( request ) {

   const visitor = await request.json();

   if ( !visitor ) return NextResponse.json({ message: 'requested visitor data is missing', status: 400 });

   try {
      await connectDB();
      const visitInfo = await VisitInfos.findOneAndDelete({ email: visitor.email, mobile: visitor.mobile })
      if( !visitInfo ) {
         throw new Error ( 'not found' );  
      } else {
         return NextResponse.json( { message: 'success', status: 200, ...visitInfo } );
      };
   } catch (error) {
      return NextResponse.json({ message: error.message, status: error.status || 500 });
   };
};