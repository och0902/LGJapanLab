import connectDB from '@/libs/connectDB';
import Careers from '@/models/Careers';
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/config/nodemailer';

export async function POST( request ) { 

   const bodyData = await request.formData();
   console.log('POST 진입');
   console.log(bodyData.get('title'));   
   console.log(bodyData.get('file'));

   const file = await bodyData.get('file');

   const bytes = await file.arrayBuffer();
   const buffer = Buffer.from(bytes);
   const path = `./upload/${file.name}`;
   await writeFile(path, buffer);
   console.log(`open ${path} to see the uploaded file`);
   
   // userData.get('files').map(file => console.log(file.name));

   // const title = request.title;
   // console.log('title', title);

   // const files = request.files;
   // console.log('files', files);

   // userData.files.map((file) => console.log(file));
   // console.log('files', userData.files[0]);

   // await connectDB().catch((err) => new NextResponse(err.message, { status: 500 }));
   // await Careers.create(userData);

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
