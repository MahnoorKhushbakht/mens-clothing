import { NextResponse } from 'next/server';
import { getPosts } from '@/lib/categories';
export async function GET(request) {
  const query = request.nextUrl.searchParams.get('query');
  const reviews = await getPosts(query)
  return NextResponse.json(reviews);
}