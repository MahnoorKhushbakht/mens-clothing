import { Field, Sign } from '@/utils/models/Schema';
import dbConnect from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { getUserFromSession } from '@/lib/auth';

export async function GET() {
  await dbConnect();
  try {
    const fields = await Field.find({});
    return NextResponse.json({ data: fields });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.status(500).json({ error: error.message });
  }
}

export async function POST(request) {
  try {
    const user = await getUserFromSession();
    if (!user) {
      throw new Error('Unauthorized');
    }
    const body = await request.json();
    const { name, comment, rating, slug } = body;
    console.log("Received POST request with data:", name, comment, rating, slug);
   await dbConnect();
    const field = await Field.create({
      name,
      comment,
      rating,
      slug,
      user_id: user.id, 
    });
    console.log("Saved field:", field);
    await Sign.findByIdAndUpdate(user.id, { $push: { fields: field._id } });
    return NextResponse.json({ data: field });
  } catch (error) {
    console.error("field Error:", error);
    if (error.name === 'MongoError' && error.code === 11000) {
      res.status(400).json({ message: 'You have already commented on this post', code: 11000 });
    } else {
      console.error('Error creating comment:', error);
      res.status(500).json({ message: 'An error occurred while creating the comment' });
    }
  }
}
