import { NextRequest, NextResponse } from 'next/server';
import { deleteBookmark } from '@/lib/firebase/services';

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
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
