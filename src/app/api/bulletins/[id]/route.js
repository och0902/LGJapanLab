import Bulletins from '@/models/Bulletin';
import connectDB from '@/libs/connectDB';
import { NextResponse } from 'next/server';

export async function PUT( request, { params } ) {
   const { id } = params;
   const { newTitle: title, newAuthor: author, newBulletin: bulletin } = await request.json();
   await connectDB().catch((err) => new NextResponse(err.message, { status: 500 }));
   await Bulletins.findByIdAndUpdate(id, { author, title, bulletin });
   return NextResponse.json({ message: 'bulletin updated ...'}, { status: 200 });
};

export async function GET( request, { params } ) {
   const { id } = params;
   await connectDB().catch((err) => new NextResponse(err.message, { status: 500 }));
   const bulletin = await Bulletins.findOne({ _id: id });
   if ( !bulletin ) return new NextResponse('data is missing', { status: 400 });
   return NextResponse.json({ bulletin }, { status: 200 });
};

export async function DELETE( request, { params } ) {
   const { id } = params;
   await connectDB().catch((err) => new NextResponse(err.message, { status: 500 }));
   await Bulletins.findByIdAndDelete(id);
   return NextResponse.json({ message: 'bulletin deleted ...'}, { status: 200 });
};
