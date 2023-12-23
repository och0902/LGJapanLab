import fs from 'fs';
import connectDB from '@/libs/connectDB';
import VisitApply from '@/models/VisitApply';
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

   const checkbox = await bodyData.get('checkbox');
   const dateOfVisit = await bodyData.get('dateOfVisit'); 
   const purposeOfVisit = await bodyData.get('purposeOfVisit'); 
   const personToMeet = await bodyData.get('personToMeet'); 
   const visitorName = await bodyData.get('visitorName');
   const visitorMobile = await bodyData.get('visitorMobile');
   const visitorEmail = await bodyData.get('visitorEmail');
   const numberOfVisitors = await bodyData.get('numberOfVisitors');
   const conferenceRoom = await bodyData.get('conferenceRoom');
   const laboratory = await bodyData.get('laboratory');
   const otherMatters = await bodyData.get('otherMatters');

   const timeStr = time();
   const directory = `./upload/visit/${visitorName}-${timeStr}`;

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

   const visitApplyData = { checkbox, dateOfVisit, purposeOfVisit, personToMeet,
      visitorName, visitorMobile, visitorEmail, numberOfVisitors, conferenceRoom, laboratory, files, otherMatters };

   await connectDB().catch((error) => NextResponse.json(error.message, { status: 500 }));
   await VisitApply.create(visitApplyData);

   let document = `<div><h2>Visit Application Data has been submitted.</h2>`;
   document += Object.entries(visitApplyData).reduce((docStr, [key, value]) => {
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
         subject: 'Visit Application Data',
         text: `${visitorName}'s Data`,
         html: document,
         attachments: files,
      });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ message: error.message }, { status: error.status });
   };

   return NextResponse.json({ message: 'Visit application data is successively saved ...' }, { status: 201 });
};

export async function GET() {
   await connectDB().catch((err) => NextResponse.json(err.message, { status: 500 }));
   const visitApply = await VisitApply.find().sort({ createdAt : -1 });
   if ( !visitApply ) return NextResponse.json({ message: 'visit application data is missing' }, { status: 400 });
   return NextResponse.json({ visitApply });
};

