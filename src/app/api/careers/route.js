import { time } from '@/util/time';
import connectDB from '@/libs/connectDB';
import ApplicantInfos from '@/models/ApplicantInfos';
import nodemailer from 'nodemailer';
import { docSubmit, docReply } from './doc';
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

   const fileLength = await bodyData.get('fileLength');

   let files=[];
   for ( let i=0 ; i<fileLength ; i++ ) {
      const file = await bodyData.get(`files${i}`);
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      files[i] = { filename: file.name, path: `${directory}/${file.name}`, size: file.size, lastModified: file.lastModified, lastModifiedDate: file.lastModifiedDate };
   }; 

   const applicantData = { name, nameKana, email, mobile, recruitmentJob, files, otherMatters, privacyCheck, recruitmentStatus };

   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { 
         user: process.env.TRANSPORTER_USER, 
         pass: process.env.TRANSPORTER_PASSWORD, 
      },
   });

   const docSubmitEmail = docSubmit(applicantData);

   try {
      const response = await transporter.sendMail({
         from: applicantData.email,
         to: process.env.CAREERS_RECEIVER_ADDRESS,
         subject: 'Careers application data has been submitted.',
         text: `${applicantData.name}'s Data`,
         html: docSubmitEmail,
         attachments: files,
      });
      if( !response.response.split(' ').includes('OK') ) {
         throw new Error ('submit-email sending failure');
      };
   } catch (error) {
      return NextResponse.json({ message: error.message, status: error.status || 500 });
   };

   const docReplyEmail = docReply();

   try {
      const response = await transporter.sendMail({
         from: process.env.CAREERS_RECEIVER_ADDRESS,
         to: applicantData.email,
         subject: 'We have received your careers application.',
         text: `${applicantData.name}'s Data`,
         html: docReplyEmail,
      });
      if( response.response.split(' ').includes('OK') ) {
         return NextResponse.json({ message: 'data processed successfully', status: 200 });
      } else {
         throw new Error ('reply-email sending failure');
      };
   } catch (error) {
      return NextResponse.json({ message: error.message, status: error.status || 500 });
   };

};

export async function GET( request ) {
   
   const applicant = Object.fromEntries(request.nextUrl.searchParams);

   if ( !applicant ) return NextResponse.json({ message: 'requested applicant is missing', status: 400 });

   try {
      await connectDB();
      const applicantInfo = await ApplicantInfos.findOne({ name: applicant.name, email: applicant.email })
      if ( !applicantInfo ) {
         throw new Error ('not found');
      } else {
         return NextResponse.json({ message: 'success', status: 200, ...applicantInfo });
      };
   } catch (error) {
      return NextResponse.json({ message: error.message, status: error.status || 500 });
   };
};