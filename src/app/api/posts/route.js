import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Field from '@/utils/models/Schema';
import Sign from '@/utils/models/Schema';
import { getUserFromSession } from '@/lib/auth';

export async function POST(request) {
  try {
    const user = await getUserFromSession();
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, comment, rating, slug } = body;

    await dbConnect();

    // Check for existing comment
    const existingComment = await Field.findOne({ user_id: user.id, slug });
    if (existingComment) {
      return NextResponse.json({ message: 'You have already commented on this post', code: 11000 }, { status: 400 });
    }

    // Create new comment
    const field = await Field.create({
      name,
      comment,
      rating,
      slug,
      user_id: user.id,
    });

    await Sign.findByIdAndUpdate(user.id, { $push: { fields: field._id } });

    return NextResponse.json({ data: field });
  } catch (error) {
    console.error("field Error:", error);
    if (error.name === 'MongoError' && error.code === 11000) {
      return NextResponse.json({ message: 'You have already commented on this post', code: 11000 }, { status: 400 });
    } else {
      return NextResponse.json({ message: 'An error occurred while creating the comment' }, { status: 500 });
    }
  }
}
