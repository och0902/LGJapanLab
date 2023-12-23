import fs from 'fs';
import connectDB from '@/libs/connectDB';
import Careers from '@/models/Careers';
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

   const bodyData = await request.formData();

   // console.log('post진입 bodyData: ', bodyData);

   const name = await bodyData.get('name');
   const email = await bodyData.get('email');
   const mobile = await bodyData.get('mobile');
   const position = await bodyData.get('position'); 
   const otherMatters = await bodyData.get('otherMatters');
   const privacyCheck = await bodyData.get('privacyCheck');
   const recruitmentStatus = await bodyData.get('recruitmentStatus');

   const timeStr = time();
   const directory = `./upload/careers/${name}-${timeStr}`;

   if ( !fs.existsSync (directory) ) {
      fs.mkdir(directory, (err) => {
         if (err) console.error(err); 
      });
   };

   const fileLength = await bodyData.get('fileLength');

   let files = [];
   for ( let i=0 ; i<fileLength ; i++ ) {
      const file = await bodyData.get(`files${i}`);
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      files[i] = { filename: file.name, path: `${directory}/${file.name}`, size: file.size, lastModified: file.lastModified, lastModifiedDate: file.lastModifiedDate };
      fs.writeFile(files[i].path, buffer, (error) => {
         if (error) { console.error(error); }
         else { console.log(`Files uploaded successfully at ${files[i].path}`); };
      });
   }; 

   const userData = { name, email, mobile, position, files,  otherMatters, privacyCheck, recruitmentStatus };

   await connectDB().catch((error) => NextResponse.json(error.message, { status: 500 }));
   await Careers.create(userData);

   let document = `<div><h2>Careers application data has been submitted.</h2>`;
   document += Object.entries(userData).reduce((docStr, [key, value]) => {
      if ( key !== 'files' ) {
         docStr += `<p>${key}: <strong>${value}</strong></p>`
      } else {
         let fileName = ''; 
         files.forEach((file, i) => { fileName += `<p>file#${i}: <strong>${file.filename}</strong>, path: <strong>${file.path}</strong></p>` });
         docStr += fileName;
      };
      return docStr;
   },'');
   document += `</div>`;

   try {
      await transporter.sendMail({
         ...mailOptions,
         subject: 'Careers Application Data',
         text: `${name}'s Data`,
         html: document,
         attachments: files,
      });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ message: error.message }, { status: error.status });
   };

   return NextResponse.json({ message: 'Careers data is successively saved ...' }, { status: 201 });
};

// export async function GET() {
//    await connectDB().catch((err) => NextResponse.json(err.message, { status: 500 }));
//    const careers = await Careers.find().sort({ createdAt : -1 });
//    if ( !careers ) return NextResponse.json({ message: 'careers data is missing' }, { status: 400 });
//    return NextResponse.json({ careers });
// };

export async function GET( request ) {

   const applicant = Object.fromEntries(request.nextUrl.searchParams);

   if ( !applicant ) return NextResponse.json({ message: 'data is missing' }, { status: 400 });
   await connectDB().catch((error) => NextResponse.json(error.message, { status: 500 }));
   try {
      const applicantInfo = await Careers.findOne({ name: applicant.name, email: applicant.email });
      if ( !applicantInfo ) {
         new NextResponse({ message:'applicant not found ...', status: 500 });     
      } else {
         return NextResponse.json({ ...applicantInfo, message: 'success', status: 200 });
      };
   } catch (error) {
      new NextResponse(error.message, { status: 500 }) ;
   };
};