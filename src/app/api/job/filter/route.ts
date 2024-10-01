import { NextResponse } from 'next/server';
import { extractJobListingsFromCSV } from '../../../../../utils/csvHelper';
import { Job } from '@/app/types';

export async function GET(request: Request) {
  try {
    // Extract query parameters from the request URL
    const { searchParams } = new URL(request.url);

    // Handle cases where parameters are set as 'undefined' (string)
    const state = searchParams.get('state') !== 'undefined' ? searchParams.get('state') : undefined;
    const title = searchParams.get('title') !== 'undefined' ? searchParams.get('title') : undefined;
    const city = searchParams.get('city') !== 'undefined' ? searchParams.get('city') : undefined;

    // get all job listings from the CSV
    const jobListings: Job[] = extractJobListingsFromCSV();

    // Filter the job listings based on provided query parameters
    const filteredJobs = jobListings.filter((job) => {
      const matchesState = state ? job.state.toLowerCase() === state.toLowerCase() : true;
      const matchesTitle = title ? job.jobTitle.toLowerCase().includes(title.toLowerCase()) : true;
      const matchesCity = city ? job.city.toLowerCase() === city.toLowerCase() : true;

      return matchesState && matchesTitle && matchesCity;
    });

    return NextResponse.json({
      status: 'success',
      totalJobs: filteredJobs.length,
      jobs: filteredJobs,
    });
  } catch (error) {
    console.error('Error reading or parsing the CSV file:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to get job listings' },
      { status: 500 }
    );
  }
}
