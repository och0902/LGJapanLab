import fs from 'fs';
import { time } from '@/util/time';
import connectDB from '@/libs/connectDB';
import ApplicantInfos from '@/models/ApplicantInfos';
import { transporter, careersMailOptions } from '@/config/nodemailer';
import { NextResponse } from 'next/server';

export async function POST( request ) { 
   
   const bodyData = await request.formData();

   const name = await bodyData.get('name');
   const nameKana = await bodyData.get('nameKana');
   const email = await bodyData.get('email');
   const mobile = await bodyData.get('mobile');
   const recruitmentJob = await bodyData.get('recruitmentJob'); 
   const otherMatters = await bodyData.get('otherMatters');
   const privacyCheck = await bodyData.get('privacyCheck');
   const recruitmentStatus = await bodyData.get('recruitmentStatus');

   const timeStr = time();
   const directory = `./upload/applicantInfos/${timeStr}-${name}`;

   if ( !fs.existsSync (directory) ) {
      fs.mkdir(directory, (error) => {
         if (error) console.error(error); 
      });
   };

   const fileLength = await bodyData.get('fileLength');

   let files=[];
   for ( let i=0 ; i<fileLength ; i++ ) {
      const file = await bodyData.get(`files${i}`);
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      files[i] = { filename: file.name, path: `${directory}/${file.name}`, size: file.size, lastModified: file.lastModified, lastModifiedDate: file.lastModifiedDate };
      fs.writeFile(files[i].path, buffer, (error) => {
         if (error) { console.log(error); }
         else { console.log(`Recruitment Application Files uploaded successfully at ${files[i].path}`); };
      });
   }; 

   const applicantData = { name, nameKana, email, mobile, recruitmentJob, files, otherMatters, privacyCheck, recruitmentStatus };

   try {
      await connectDB();
      await ApplicantInfos.create(applicantData);
   } catch (error) {
      console.log(error);
      return NextResponse.json({ message: error.message, status: error.status });
   };

   let document = `<div><h2>Careers Application Data</h2>`;
   document += Object.entries(applicantData).reduce((docStr, [key, value]) => {
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
      careersMailOptions.from = applicantData.email;
      const response = await transporter.sendMail({
         ...careersMailOptions,
         subject: 'Careers Application Data has been submitted.',
         text: `${name}'s Data`,
         html: document,
         attachments: files,
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
   
   const applicant = Object.fromEntries(request.nextUrl.searchParams);

   if ( !applicant ) return NextResponse.json({ message: 'requested applicant is missing', status: 400 });

   try {
      await connectDB();
      const applicantInfo = await ApplicantInfos.findOne({ name: applicant.name, email: applicant.email })
      if ( !applicantInfo ) {
         return NextResponse.json({ message: 'not found', status: 500 });
      } else {
         return NextResponse.json({ message: 'success', status: 200, ...applicantInfo });
      };
   } catch (error) {
      console.log(error);
      return NextResponse.json({ message: error.message, status: error.status });
   };
};