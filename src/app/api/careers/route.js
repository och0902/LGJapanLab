import connectDB from '@/libs/connectDB';
import Careers from '@/models/Careers';
import { writeFile } from 'fs/promises';
import { transporter, mailOptions } from '@/config/nodemailer';
import { NextResponse } from 'next/server';

export async function POST( request ) { 

   const bodyData = await request.formData();

   console.log('post진입 ', bodyData);
   const position = await bodyData.get('position'); 
   const name = await bodyData.get('name');
   const email = await bodyData.get('email');
   const files = await bodyData.get('files');
   const otherMatters = await bodyData.get('otherMatters');

   console.dir(files);

   const bytes = await files.arrayBuffer();
   const buffer = Buffer.from(bytes);
   const filePaths = `./upload/${files.name}`;
   await writeFile(filePaths, buffer);
   console.log(`open ${filePaths} to see the uploaded file`);

   // userData.files.map((file) => console.log(file));
   // console.log('files', userData.files[0]);

   await connectDB().catch((err) => new NextResponse(err.message, { status: 500 }));
   await Careers.create({ position, name, email, filePaths, otherMatters });

   // let document = `<div><h2>Careers Application Data</h2>`;
   // document += Object.entries(userData).reduce((str, [key, value]) =>
   //    (str += `<p>${key}: <strong>${value}</strong></p>`), 
   //    ''
   // );
   // document += `</div>`;

   // try {
   //    await transporter.sendMail({
   //       ...mailOptions,
   //       subject: 'Careers Application Data has been submitted.',
   //       text: 'Careers Application Data',
   //       html: document,
   //    });
   // } catch (error) {
   //    console.log(error);
   //    return NextResponse.json({ message: error.message }, { status: error.status });
   // };

   return NextResponse.json({ message: 'careers data is created ...' }, { status: 201 });
};

export async function GET() {
   await connectDB().catch((err) => new NextResponse(err.message, { status: 500 }));
   const careers = await Careers.find().sort({ createdAt : -1 });
   if ( !careers ) return new NextResponse('careers data is missing', { status: 400 });
   return NextResponse.json({ careers });
};

