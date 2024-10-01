import JobItem from "./components/jobList/jobItem";
import NavBar from "./components/NavBar/NavBar";
import { Job } from "./types";

// Server-side function to fetch jobs with query params
async function fetchJobs(params: { state?: string; title?: string; city?: string }) {
  const queryParams = new URLSearchParams(params as Record<string, string>);
  
  
  const response = await fetch(`http://localhost:3000/api/job/filter?${queryParams.toString()}`, {
    headers: {
      'Cache-Control': 'no-store', 
      'Pragma': 'no-cache',         
      'Expires': '0',               
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
      <NavBar filter={true} linkName="Saved Jobs" title="Jobs" url="/saved-jobs"/>
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job: Job) => (
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

// import FilterForm from "./components/filter/filterForm";
// import JobList from "./components/jobList/jobList";
// import NavBar from "./components/NavBar/NavBar";


// export default function Home() {
//   return (
//     <div>
//       <NavBar
//         title="Jobs"
//         linkName="Saved Jobs"
//         url="/saved-jobs"
//         filter={true}
//       />
//       {/* <FilterForm /> */}
//       {/* <JobList /> */}
//     </div>
//   );
// }
