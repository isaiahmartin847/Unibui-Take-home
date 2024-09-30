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
      const ids = searchParams.get('ids');
  
      const jobListings: Job[] = extractJobListingsFromCSV();
  
      if (ids) {
        const jobIds = ids.split(',').map(Number);
        const filteredJobs = jobListings.filter(job => jobIds.includes(job.id));
  
        return NextResponse.json({
          status: 'success',
          totalJobs: filteredJobs.length,
          jobs: filteredJobs
        });
      } else {
        return NextResponse.json({
          status: 'success',
          totalJobs: jobListings.length,
          jobs: jobListings
        });
      }
    } catch (error) {
      console.error('Error processing request:', error);
      return NextResponse.json(
        { status: 'error', message: 'Failed to fetch job listings' },
        { status: 500 }
      );
    }
  }