import { NextRequest, NextResponse } from 'next/server';
import { getOneJobById } from '../../../../../utils/csvHelper';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const job =  getOneJobById(id);

    if (!job.length) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json({ job });
  } catch (error) {
    console.error('Error fetching job:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}