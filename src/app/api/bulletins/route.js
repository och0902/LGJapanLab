import Bulletins from '@/models/Bulletin';
import connectDB from '@/libs/connectDB';
import { NextResponse } from 'next/server';

export async function POST(request) {
   const { title, author, bulletin } = await request.json();
   await connectDB();
   await Bulletins.create({ title, author, bulletin });
   return NextResponse.json({ message: 'article created ...'}, { status: 201 });
};

export async function GET() {
   await connectDB();
   const bulletins = await Bulletins.find().sort({ createdAt : -1 });
   return NextResponse.json({ bulletins });
};

export async function DELETE(request) {
   const id = request.nextUrl.searchParams.get('id');
   await connectDB();
   await Bulletins.findByIdAndDelete(id);
   return NextResponse.json({ message: 'bulletin deleted ...'}, { status: 200 });
};