import { NextResponse } from 'next/server';
import { extractJobListingsFromCSV } from '../../../../../utils/csvHelper';



export async function GET() {
  try {
    const jobListings = extractJobListingsFromCSV()

    return NextResponse.json({
      status: 'success',
      totalJobs: jobListings.length,
      jobs: jobListings
    });
  } catch (error) {
    console.error('Error reading or parsing the CSV file:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch job listings' },
      { status: 500 }
    );
  }
}