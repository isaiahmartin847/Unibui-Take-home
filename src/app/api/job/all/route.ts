import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface JobListing {
  id: number;
  jobTitle: string;
  companyName: string;
  location: string;
  jobDescription: string;
  requirements: string;
}

function extractJobListingsFromCSV(csvString: string): JobListing[] {
  const lines = csvString.trim().split('\n');
  const headers = lines[0].split(',');
  
  const jobListings: JobListing[] = lines.slice(1).map((line, index) => {
    const values = line.split(',');
    return {
      id: index + 1,
      jobTitle: values[0],
      companyName: values[1],
      location: values[2],
      jobDescription: values[3],
      requirements: values[4]
    };
  });

  return jobListings;
}

export async function GET() {
  try {
    // Adjust the path to where your CSV file is located in the Next.js project
    const filePath = path.join(process.cwd(), 'public', 'jobs.csv');
    const csvData = fs.readFileSync(filePath, 'utf8');
    const jobListings = extractJobListingsFromCSV(csvData);

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