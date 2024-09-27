import { Job, AllJobApiRes } from "@/app/types";
import JobItem from "./jobItem";

async function getJobs(): Promise<AllJobApiRes> {
  const res = await fetch('http://localhost:3000/api/job/all', { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch jobs: ${res.status} ${res.statusText}`);
  }
 
  return res.json();
}

function JobListContent({ jobs }: { jobs: Job[] }) {
  return (
    <div>
      <h1>Jobs</h1>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map(job => (
            <JobItem 
              key={job.id}
              title={job.jobTitle}
              company={job.companyName}
              city={job.city}
              state={job.state}
              />
          ))}
        </ul>
      ) : (
        //this is when no jobs are found make it a bit better and 
        <p>No jobs found.</p>
      )}
    </div>
  );
}

export default async function JobList() {
  try {
    const jobData: AllJobApiRes = await getJobs();
    
    return <JobListContent jobs={jobData.jobs} />;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return <div>Error: {error instanceof Error ? error.message : 'An unexpected error occurred'}</div>;
  }
}