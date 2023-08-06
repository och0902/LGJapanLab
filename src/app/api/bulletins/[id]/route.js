import connectDB from '@/libs/connectDB';
import Bulletins from '@/models/Bulletin';
import { NextResponse } from 'next/server';

export async function PUT( request, { params } ) {
   const { id } = params;
   const { newTitle: title, newAuthor: author, newBulletin: bulletin } = await request.json();
   await connectDB();
   await Bulletins.findByIdAndUpdate(id, { author, title, bulletin });
   return NextResponse.json({ message: 'bulletin updated ...'}, { status: 200 });
};

export async function GET(request, { params }) {
   const { id } = params;
   await connectDB();
   const bulletin = await Bulletins.findOne({ _id: id });
   return NextResponse.json({ bulletin }, { status: 200 });
}