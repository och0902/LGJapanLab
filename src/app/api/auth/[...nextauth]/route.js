import connectDB from '@/libs/connectDB';
import Employees from '@/models/Employees';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

const handler = NextAuth ({
   providers: [
      CredentialsProvider({
         async authorize( credentials ) {
            await connectDB().catch((error) => new NextResponse(error.message, { status: 500 }));
            try {
               const { name, email, password, _id } = await Employees.findOne({ email: credentials.email });
               const userData = { name, email, password, _id };
               const passwordMatched = await bcrypt.compare( credentials.password, userData.password );
               if ( !userData ) {
                  new NextResponse('user data not found ...', { status: 500 });     
               // } else if ( !userData.admin ) {
               //    new NextResponse('not admin ...', { status: 500 });   
               } else if ( !passwordMatched ) {
                  new NextResponse('wrong credentials ...', { status: 500 });
               } else {
                  return userData;
               };
            } catch (error) {
               new NextResponse(error.message, { status: 500 }) ;
            };
         },
      }),
   ],

   callbacks: {
      async jwt ({ token, user }) {
         return { ...token, ...user };
      },
      async session ({ session, token }) {
         session.user = token;
         return session;
      },
   },

   secret: process.env.NEXTAUTH_SECRET,
   
   session: {
      strategy: 'jwt',
      maxAge: 60 * 60 * 1,
   },
   
   pages: {
      error: '/signIn',
   },
   
});

export { handler as GET, handler as POST };


export async function PUT( request, { params } ) {
   const id = params.nextauth[0];
   const { name, email, newPassword } = await request.json();
   const userData = { name, email, newPassword };
   const hashedNewPassword = await bcrypt.hash( userData.newPassword, 5 );
   await connectDB().catch((error) => new NextResponse(error.message, { status: 500 }));
   try {
      await Employees.findByIdAndUpdate(id, { name: userData.name, email: userData.email, password: hashedNewPassword });      
   } catch (error) {
      return new NextResponse(error.message, { status: 500 });      
   }
   return NextResponse.json({ message: 'password updated ...'}, { status: 200 });
};