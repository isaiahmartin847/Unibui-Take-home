import { NextRequest, NextResponse } from 'next/server';
import { extractJobListingsFromCSV } from "../../../../utils/csvHelper";
import { Job } from '@/app/types';

interface SuccessResponse {
  status: 'success';
  totalJobs: number;
  jobs: Job[];
}

interface ErrorResponse {
  status: 'error';
  message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const { searchParams } = new URL(request.url);

    // Extract query parameters
    const ids = searchParams.get('ids');
    const state = searchParams.get('state') !== 'undefined' ? searchParams.get('state') : undefined;
    const title = searchParams.get('title') !== 'undefined' ? searchParams.get('title') : undefined;
    const city = searchParams.get('city') !== 'undefined' ? searchParams.get('city') : undefined;

    // Get all job listings from the CSV
    const jobListings: Job[] = extractJobListingsFromCSV();

    let filteredJobs: Job[];

    if (ids) {
      // Filter by IDs if provided
      const jobIds = ids.split(',').map(Number);
      filteredJobs = jobListings.filter(job => jobIds.includes(job.id));
    } else {
      // Filter based on other criteria
      filteredJobs = jobListings.filter((job) => {
        const matchesState = state ? job.state.toLowerCase() === state.toLowerCase() : true;
        const matchesTitle = title ? job.jobTitle.toLowerCase().includes(title.toLowerCase()) : true;
        const matchesCity = city ? job.city.toLowerCase() === city.toLowerCase() : true;

        return matchesState && matchesTitle && matchesCity;
      });
    }

    return NextResponse.json({
      status: 'success',
      totalJobs: filteredJobs.length,
      jobs: filteredJobs
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch job listings' },
      { status: 500 }
    );
  }
}