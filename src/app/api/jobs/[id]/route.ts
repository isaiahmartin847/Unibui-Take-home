// src/app/api/jobs/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  return NextResponse.json({ message: `job with id of ${id}` });
}