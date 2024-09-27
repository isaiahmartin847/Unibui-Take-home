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
  
  // Interface for the entire API response
  interface AllJobApiRes {
    status: string;
    totalJobs: number;
    jobs: Job[];
  }
  
  export type { Job, AllJobApiRes };