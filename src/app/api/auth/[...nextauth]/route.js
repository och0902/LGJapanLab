import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import connectDB from '@/libs/connectDB';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

const handler = NextAuth ({
   providers: [
      CredentialsProvider({

         async authorize( credentials ) {

            await connectDB().catch((err) => { throw new Error(err); });

            try {
               const user = await User.findOne({ email: credentials.email });
               const passwordMatched = await bcrypt.compare( credentials.password, user.password );
               
               if ( !user ) {
                  throw new Error('user not found ...');
               } else if ( !passwordMatched ) {
                  throw new Error('wrong credentials ...');
               } else {
                  return user;
               };

            } catch (error) {
               throw new Error(error);
            };
         },
      }),
   ],
   callbacks: {
      async jwt({ token, user }) {
         return { ...token, ...user };
      },
      async session({ session, token }) {
         session.user = token;
         return session;
      },
   },
   secret: process.env.NEXTAUTH_SECRET,
   sesion: {
      strategy: 'jwt',
   },
   pages: {
      error: '/bulletins/signIn',
   },
});

export { handler as GET, handler as POST };


export async function PUT( request, { params } ) {
   const id = params.nextauth[0];
   const { name, email, newPassword } = await request.json();
   // console.log(id, name, email, newPassword); 
   const hashedNewPassword = await bcrypt.hash(newPassword, 5);
   await connectDB();
   try {
      await User.findByIdAndUpdate(id, { name, email, password: hashedNewPassword });      
   } catch (error) {
      return new NextResponse(error.message, { status: 500 });      
   }
   return NextResponse.json({ message: 'password updated ...'}, { status: 200 });
};