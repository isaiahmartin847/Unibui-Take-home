"use server"

import JobLocation from "@/app/components/jobPage/jobLocation";
import { Job } from "@/app/types";

interface ApiResponse {
  jobs: Job[];
}

interface Props {
  params: {
    id: string
  }
}

async function getJob(id: string): Promise<Job> {
    const res = await fetch(`http://localhost:3000/api/job?ids=${id}`, { cache: 'no-store' });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch job: ${res.status} ${res.statusText}`);
    }
   
    const data: ApiResponse = await res.json();
    if (!data.jobs || data.jobs.length === 0) {
      throw new Error('No job data found');
    }
    return data.jobs[0];
}

const Page = async ({ params }: Props ) => {
    try {
        const job = await getJob(params.id);

        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Job Details</h1>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-semibold mb-2">{job.jobTitle || 'No title available'}</h2>
                    <p className="mb-2"><strong>Company:</strong> {job.companyName || 'Not specified'}</p>
                    <p className="mb-2"><strong>Location:</strong> {job.city}, {job.state}</p>
                    <p className="mb-4"><strong>Description:</strong> {job.jobDescription || 'No description available'}</p>
                    <p className="mb-4"><strong>Description:</strong> {job.requirements || 'No retirements available'}</p>
                    <div>
                        <strong>Requirements:</strong>
                        <p>{job.requirements || 'No specific requirements listed.'}</p>
                    </div>
                </div>
                <JobLocation city={job.city} state={job.state} />
            </div>
        )
    } catch (error) {
        console.error('Error fetching or rendering job:', error);
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Error</h1>
                <p>Sorry, we couldn't load the job details. Please try again later.</p>
            </div>
        );
    }
}


// add a location map with a pin 

export default Page