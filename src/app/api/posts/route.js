import Field from '@/utils/models/userModel';
import dbConnect from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

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
        const body = await request.json();
        console.log('body',body)
        const { name, comment, rating, slug } = body; // Ensure that slug is properly extracted
        console.log("Received POST request with data:", name, comment, rating, slug);
        
        await dbConnect();
        const field = await Field.create({ name, comment, rating, slug });
        // field.dropIndex({ "slug": 1 });
        console.log("Saved field:", field);
        
        return NextResponse.json({ data: field });
    } catch (error) {
        console.error("field Error:", error);
        return NextResponse.status(500).json({ error: error.message });
    }
}

