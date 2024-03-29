import connectDB from '@/libs/connectDB';
import Admins from '@/models/Admins';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

const handler = NextAuth ({
   providers: [
      CredentialsProvider({
         async authorize( credentials ) {
            try {
               await connectDB();
               const userData = await Admins.findOne({ email: credentials.email });
               const passwordMatched = await bcrypt.compare( credentials.password, userData.password );
               if ( !userData ) {
                  throw new Error ('user data not found ...');  
               } else if ( !passwordMatched ) {
                  throw new Error ('wrong credentials ...');
               } else {
                  return userData;
               };
            } catch (error) {
               return NextResponse.json({ message: error.message, status: error.status || 500 }) ;
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
   const userData = await request.json();
   const hashedNewPassword = await bcrypt.hash( userData.newPassword, 5 );

   try {
      await connectDB();
      await Admins.findByIdAndUpdate(id, { name: userData.name, email: userData.email, password: hashedNewPassword });      
   } catch (error) {
      return NextResponse.json({ message: error.message, status: error.status || 500 }) ;   
   } finally {
      return NextResponse.json({ message: 'password updated ...', status: 200 });
   };
};