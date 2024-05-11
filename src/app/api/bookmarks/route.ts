import { NextRequest, NextResponse } from 'next/server';
import { addToBookmarks, getBookmarks } from '@/lib/firebase/services';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export async function POST(request: NextRequest) {
  const session = await getServerSession(options);
  const req = await request.json();
  const bookmark = { owner: session?.user?.id, ...req };

  if (!session) {
    return NextResponse.json({
      status: 401,
      statusText: 'failed',
      message: 'Unauthorized',
    });
  } else {
    const res = await addToBookmarks(bookmark);
    if (res.statusCode === 201) {
      return NextResponse.json({
        status: 201,
        statusText: 'success',
        message: 'added bookmark',
      });
    } else {
      return NextResponse.json({
        status: 200,
        statusText: 'failed',
        message: 'Surah and ayat already exist',
      });
    }
  }
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(options);

  if (!session) {
    return NextResponse.json({
      status: 401,
      statusText: 'failed',
      message: 'Unauthorized',
      data: null,
    });
  } else {
    const bookmarks = await getBookmarks('bookmarks');
    const bookmarksByOwner = bookmarks.filter((bookmark) => bookmark.owner === session?.user?.id);
    if (bookmarksByOwner) {
      return NextResponse.json({
        status: 200,
        statusText: 'success',
        message: 'data retrieved',
        data: bookmarksByOwner,
      });
    } else {
      return NextResponse.json({
        status: 404,
        statusText: 'failed',
        message: 'not found',
        data: {},
      });
    }
  }
}
