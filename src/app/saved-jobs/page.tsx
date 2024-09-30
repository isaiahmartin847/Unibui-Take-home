"use client";

import { useState, useEffect } from "react";
import SavedJobItem from "../components/savedJobs/savedJobItem";
import { Job } from "../types";

const SavedJobs = () => {
    const [savedJobs, setSavedJobs] = useState<number[]>(() => {
        return JSON.parse(localStorage.getItem("savedJobs") || "[]");
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchJobs = async () => {
            if (savedJobs.length === 0) return;

            setLoading(true);
            try {
                const response = await fetch(`http://localhost:3000/api/job?ids=${savedJobs}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch jobs.");
                }
                const result = await response.json();
                setData(result.jobs); // Only store the jobs array from the response
            } catch (err) {
                setError((err as Error).message || "An unknown error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);
    
    

    const handleClick = (id: number) => {
    
        //filter the local storage and update it
        const filteredJobs = savedJobs.filter((jobId) => jobId !== id);
        setSavedJobs(filteredJobs);
        localStorage.setItem("savedJobs", JSON.stringify(filteredJobs));

        //remove the job with the id from data 
        setData((data: Job[]) => {
            return data.filter((job) => job.id !== id)
        })
        console.log(data)

    }


    if (savedJobs.length === 0) {
        return <div>You have no saved jobs</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {data ? (
                <div>
                    {data.map((job: any) => (
                        <div key={job.id} className="flex justify-evenly">
                            <SavedJobItem
                                 id={job.id}
                                 title={job.jobTitle}
                                 company={job.companyName}
                                 city={job.city}
                                 state={job.state}
                            />
                            <button className="border-2 border-black bg-red-500" onClick={() => {handleClick(job.id)}}>Remove</button>
                        </div>
                    ))}
                </div>
            
            ) : (
                <div>No jobs found</div>
            )}
        </div>
    );
};

export default SavedJobs;

