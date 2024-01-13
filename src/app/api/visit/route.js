import connectDB from '@/libs/connectDB';
import VisitInfos from '@/models/VisitInfos';
import { transporter, visitMailOptions } from '@/config/nodemailer';
import { NextResponse } from 'next/server';

export async function POST( request ) { 
   
   const visitInfo = await request.json();

   // console.log( visitInfo );

   try {
      await connectDB();
      await VisitInfos.create(visitInfo);
   } catch (error) {
      console.log(error);
      return NextResponse.json({ message: error.message, status: error.status });
   };

   let document = `<div><h2>Visit Application Data</h2>`;
   document += Object.entries(visitInfo).reduce((docStr, [key, value]) => {
      if ( key !== 'carryingIns') {
         docStr += `<p>${key} : <strong>${value}</strong></p>`;
         return docStr;
      } else {
         docStr += `<p>carryingIns</p>`;
         visitInfo.carryingIns.map((carryingIn, i) => {
            docStr += `<p style='padding-left: 10px;'>carryingIn Item #${i}</p>`;
            Object.entries(carryingIn).map((desc, i) => {
               docStr += `<p style='padding-left: 20px;'>${desc[0]} : <strong>${desc[1]}</strong></p>`;
            });
         });
         return docStr;
      };
   },'');
   document += `</div>`;

   try {
      const response = await transporter.sendMail({
         ...visitMailOptions,
         subject: 'Visit Application Data has been submitted.',
         text: `${visitInfo.name}'s Data`,
         html: document,
      });

      // console.log(response);

      if( response.response.split(' ').includes('OK') ) {
         return NextResponse.json({ message: 'data saved & email sent successfully', status: 200 });
      } else {
         console.log(response);
         return NextResponse.json({ message: 'email sending failure', status: 501 });
      };
   } catch (error) {
      console.log(error);
      return NextResponse.json({ message: error.message, status: error.status });
   };
};


export async function GET( request ) {

   const visitor = Object.fromEntries(request.nextUrl.searchParams);

   if ( !visitor ) return NextResponse.json({ message: 'requested visitor data is missing', status: 400 });

   try {
      await connectDB();
      const visitInfo = await VisitInfos.findOne({ email: visitor.email, mobile: visitor.mobile })

      // console.log(visitInfo);

      if ( !visitInfo ) {
         return NextResponse.json({ message: 'not found', status: 500 });     
      } else {
         return NextResponse.json({ message: 'success', status: 200, ...visitInfo });
      };
   } catch (error) {
      console.log(error);
      return NextResponse.json({ message: error.message, status: error.status });
   };
};


export async function PUT( request ) { 
   
   let visitInfo = await request.json();

   try {
      await connectDB();
      const modifiedVisitInfo = await VisitInfos.findByIdAndUpdate( visitInfo._id, visitInfo )

      // console.log(modifiedVisitInfo);

      if ( !modifiedVisitInfo ) {
         return NextResponse.json({ message: 'not found', status: 500 });     
      } else {
         return NextResponse.json({ message: 'success', status: 201, ...modifiedVisitInfo });
      };
   } catch (error) {
      console.log(error);
      return NextResponse.json({ message: error.message, status: error.status });
   };
};


export async function DELETE( request ) {

   const visitor = await request.json();

   if ( !visitor ) return NextResponse.json({ message: 'requested visitor data is missing', status: 400 });

   try {
      await connectDB();
      const visitInfo = await VisitInfos.findOneAndDelete({ email: visitor.email, mobile: visitor.mobile })

      // console.log(visitInfo);
      
      if( !visitInfo ) {
         return NextResponse.json({ message:'not found', status: 500 });  
      } else {
         return NextResponse.json( { message: 'success', status: 200, ...visitInfo } );
      };
   } catch (error) {
      console.log(error);
      return NextResponse.json({ message: error.message, status: error.status });
   };
};