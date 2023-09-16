import Bulletins from '@/models/Bulletin';
import connectDB from '@/libs/connectDB';
import { NextResponse } from 'next/server';

export async function POST(request) {
   const { title, author, bulletin } = await request.json();
   await connectDB().catch((err) => new NextResponse(err.message, { status: 500 }));
   await Bulletins.create({ title, author, bulletin });
   return NextResponse.json({ message: 'article created ...'}, { status: 201 });
};

export async function GET() {
   await connectDB().catch((err) => new NextResponse(err.message, { status: 500 }));
   const bulletins = await Bulletins.find().sort({ createdAt : -1 });
   if ( !bulletins ) return new NextResponse('data is missing', { status: 400 });
   return NextResponse.json({ bulletins });
};