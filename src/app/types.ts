// Interface for individual job
interface Job {
    id: number;
    jobTitle: string;
    companyName: string;
    city: string;
    state: string;
    jobDescription: string;
    requirements: string;
  }

  // Interface for listing the jobs as items
  interface JobListItem {
    id: number
    city: string
    company: string 
    title: string
    state: string 
}

  
  // Interface for the entire API response
  interface AllJobApiRes {
    status: string;
    totalJobs: number;
    jobs: Job[];
  }
  
  export type { Job, AllJobApiRes, JobListItem };