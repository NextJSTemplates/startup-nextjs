import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'OK', message: 'still up and running' }, { status: 200 });
}
