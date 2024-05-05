import { register } from '@/lib/firebase/services';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await register(req);
  if (res.statusCode === 409) {
    return NextResponse.json({
      status: 409,
      statusText: 'failed',
      message: res.message,
    });
  } else if (res.statusCode === 201) {
    return NextResponse.json({
      status: 201,
      statusText: 'success',
      message: res.message,
    });
  } else {
    return NextResponse.json({
      status: 500,
      statusText: 'error',
      message: res.message,
    });
  }
}
