import JobItem from "../components/jobList/jobItem";
import { Job } from "../types";

// Server-side function to fetch jobs with query params
async function fetchJobs(params: { state?: string; title?: string; city?: string }) {
  const queryParams = new URLSearchParams(params as Record<string, string>);
  console.log(queryParams.toString());
  
  const response = await fetch(`http://localhost:3000/api/job/filter?${queryParams.toString()}`, {
    headers: {
      'Cache-Control': 'no-store', // Prevent caching
      'Pragma': 'no-cache',         // HTTP 1.0 compatibility
      'Expires': '0',               // Proxies
    },
  });

  const data = await response.json();
  return data;
}

// Server Component for rendering filtered jobs
export default async function FilterPage({ searchParams }: { searchParams: { state?: string; title?: string; city?: string } }) {
  const { state, title, city } = searchParams;

  // Fetch the filtered jobs based on the search params
  const { jobs, totalJobs, status } = await fetchJobs({ state, title, city });

  return (
    <div>
      <h1>Filtered Job Listings</h1>
      <p>Status: {status}</p>
      <p>Total Jobs: {totalJobs}</p>

      {/* Show the filters applied */}
      <div>
        {state && <p>Filtered by State: {state}</p>}
        {title && <p>Filtered by Title: {title}</p>}
        {city && <p>Filtered by City: {city}</p>}
      </div>

      <ul>
        {jobs.length > 0 ? (
          jobs.map((job: Job, index: number) => (
            <JobItem 
                city={job.city}
                company={job.companyName}
                id={job.id}
                state={job.state}
                title={job.jobTitle}
                key={job.id}
            />
          ))
        ) : (
          <p>No jobs found for the applied filters.</p>
        )}
      </ul>
    </div>
  );
}
