import connectDB from '@/libs/connectDB';
import VisitInfos from '@/models/VisitInfos';
import { transporter, mailOptions } from '@/config/nodemailer';
import { NextResponse } from 'next/server';

export async function POST( request ) { 
   
   const time = () => {
      const date = new Date();
      const year = date.getFullYear().toString().slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      const hour = ('0' + date.getHours()).slice(-2);
      const minute = ('0'+ date.getMinutes()).slice(-2);
      const second = ('0' + date.getSeconds()).slice(-2);
      return `${year}${month}${day}-${hour}${minute}${second}`;   
   };

   const timeStr = time();
   const visitInfo = await request.json();

   await connectDB().catch((error) => NextResponse.json(error.message, { status: 500 }));
   await VisitInfos.create( visitInfo );

   let document = `<div><h2>Visit Application Data has been submitted.</h2>`;
   document += Object.entries(visitInfo).reduce((docStr, [key, value]) => {
      docStr += `<p>${key}: <strong>${value}</strong></p>`;
      return docStr;
   },'');
   document += `</div>`;

   try {
      await transporter.sendMail({
         ...mailOptions,
         subject: 'Visit Application Data',
         text: `${visitInfo.name}'s Data`,
         html: document,
      });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: error.status });
   };
   return NextResponse.json({ message: 'Visit application data is successively saved ...' }, { status: 201 });
};


export async function GET( request ) {

   const visitor = Object.fromEntries(request.nextUrl.searchParams);

   if ( !visitor ) return NextResponse.json({ message: 'data is missing' }, { status: 400 });
   await connectDB().catch((error) => NextResponse.json(error.message, { status: 500 }));
   try {
      const visitInfo = await VisitInfos.findOne({ email: visitor.email, mobile: visitor.mobile });
      if ( !visitInfo ) {
         new NextResponse({ message:'visitor not found ...', status: 500 });     
      } else {
         return NextResponse.json({ ...visitInfo, message: 'success', status: 200 });
      };
   } catch (error) {
      new NextResponse(error.message, { status: 500 }) ;
   };
};


export async function PUT( request ) { 
   
   const time = () => {
      const date = new Date();
      const year = date.getFullYear().toString().slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      const hour = ('0' + date.getHours()).slice(-2);
      const minute = ('0'+ date.getMinutes()).slice(-2);
      const second = ('0' + date.getSeconds()).slice(-2);

      return `${year}${month}${day}-${hour}${minute}${second}`;   
   };

   let visitInfo = await request.json();

   // visitor: company, name, email, mobile
   // carryIn: item, quantity, purpose, serial, unsealed, reason
   // wifiDevice: device, wirelessMAC, cloudConnection, cloudIP, cloudVMIP, cloudConnectionIP
   // conferenceRoom: conferenceRoomUse, people, date, time
   // laboratory: laboratoryUse, laboratory
   // privacyCheck, pledgeCheck

   const timeStr = time();

   await connectDB().catch((error) => NextResponse.json(error.message, { status: 500 }));
   await VisitInfos.findByIdAndUpdate(visitInfo._id, visitInfo );

   // let document = `<div><h2>Visit Application Data has been submitted.</h2>`;
   // document += Object.entries(VisitInfosData).reduce((docStr, [key, value]) => {
   //    if ( key !== 'files' ) {
   //       docStr += `<p>${key}: <strong>${value}</strong></p>`
   //    } else {
   //       let fileName = ''; 
   //       files.forEach((file, i) => { fileName += `<p>file#${i}: <strong>${file.filename}</strong>, path: <strong>${file.path}</strong></p>` });
   //       docStr += fileName;
   //    };
   //    return docStr;
   // },'');
   // document += `</div>`;

   // try {
   //    await transporter.sendMail({
   //       ...mailOptions,
   //       subject: 'Visit Application Data',
   //       text: `${visitorName}'s Data`,
   //       html: document,
   //       attachments: files,
   //    });
   // } catch (error) {
   //    return NextResponse.json({ message: error.message }, { status: error.status });
   // };

   return NextResponse.json({ message: 'Visit application data is successively saved ...' }, { status: 201 });
};


export async function DELETE( request ) {
   const visitor = await request.json();
   if ( !visitor ) return NextResponse.json({ message: 'Data is missing' }, { status: 400 });
   await connectDB().catch((error) => NextResponse.json(error.message, { status: 500 }));
   try {
      await VisitInfos.findOneAndDelete({ email: visitor.email, mobile: visitor.mobile });
      return NextResponse.json( { message: 'Visitor application data is deleted ...', status: 200 } );
   } catch (error) {
      return new NextResponse(error.message, { status: 500 }) ;
   };
};