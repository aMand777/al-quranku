import { NextRequest, NextResponse } from 'next/server';
import { deleteBookmark } from '@/lib/firebase/services';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(options);
  const { id } = params;

  if (!session) {
    return NextResponse.json({
      status: 401,
      statusText: 'failed',
      message: 'Unauthorized',
    });
  } else {
    const res = await deleteBookmark(id);
    if (res.statusCode === 200) {
      return NextResponse.json({
        status: 200,
        statusText: 'success',
        message: 'deleted bookmark',
      });
    } else {
      return NextResponse.json({
        status: res.statusCode,
        statusText: res.statusText,
        message: res.message,
      });
    }
  }
}
