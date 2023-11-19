import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import Users from '@/models/User';
import connectDB from '@/libs/connectDB';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

const handler = NextAuth ({
   providers: [
      CredentialsProvider({
         async authorize( credentials ) {
            await connectDB().catch((error) => new NextResponse(error.message, { status: 500 }));
            try {
               const user = await Users.findOne({ email: credentials.email });
               const passwordMatched = await bcrypt.compare( credentials.password, user.password );
               if ( !user ) {
                  new NextResponse('user not found ...', { status: 500 });     
               // } else if ( !user.admin ) {
               //    new NextResponse('not admin ...', { status: 500 });   
               } else if ( !passwordMatched ) {
                  new NextResponse('wrong credentials ...', { status: 500 });
               } else {
                  return user;
               };
            } catch (error) {
               new NextResponse(error.message, { status: 500 }) ;
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
   // console.log(id, name, email, newPassword); 
   const hashedNewPassword = await bcrypt.hash(newPassword, 5);
   await connectDB().catch((error) => new NextResponse(error.message, { status: 500 }));
   try {
      await Users.findByIdAndUpdate(id, { name, email, password: hashedNewPassword });      
   } catch (error) {
      return new NextResponse(error.message, { status: 500 });      
   }
   return NextResponse.json({ message: 'password updated ...'}, { status: 200 });
};