import { NextRequest, NextResponse } from 'next/server';
import {
  addToBookmarks,
  getBookmarks,
  getBookmarksById,
} from '@/lib/firebase/services';

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await addToBookmarks(req);
    if (res.statusCode === 201) {
      return NextResponse.json({
        status: 201,
        statusText: 'success',
        message: 'added bookmark',
      });
    }

    return NextResponse.json({
      status: 200,
      statusText: 'failed',
      message: 'Surah and ayat already exist'
    });
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const detail = await getBookmarksById('bookmarks', id);
    if (detail) {
      return NextResponse.json({
        status: 200,
        message: 'success',
        data: detail,
      });
    }

    return NextResponse.json({
      status: 404,
      message: 'not found',
      data: {},
    });
  }

  const bookmarks = await getBookmarks('bookmarks');
  return NextResponse.json({
    status: 200,
    message: 'success',
    data: bookmarks,
  });
}
