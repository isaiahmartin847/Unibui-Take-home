"use client";

import { useState, useEffect } from "react";
import SavedJobItem from "../components/savedJobs/savedJobItem";
import { Job } from "../types";

const SavedJobs = () => {
    const [savedJobs, setSavedJobs] = useState<number[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<Job[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const savedJobsFromStorage = JSON.parse(localStorage.getItem("savedJobs") || "[]");
        setSavedJobs(savedJobsFromStorage);
        
        const fetchJobs = async () => {
            if (savedJobsFromStorage.length === 0) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:3000/api/job?ids=${savedJobsFromStorage.join(',')}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch jobs.");
                }
                const result = await response.json();
                setData(result.jobs);
            } catch (err) {
                setError((err as Error).message || "An unknown error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const handleClick = (id: number) => {
        const filteredJobs = savedJobs.filter((jobId) => jobId !== id);
        setSavedJobs(filteredJobs);
        localStorage.setItem("savedJobs", JSON.stringify(filteredJobs));

        setData((prevData) => prevData.filter((job) => job.id !== id));
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (savedJobs.length === 0) {
        return <div>You have no saved jobs</div>;
    }

    return (
        <div>
            {data.length > 0 ? (
                <div>
                    {data.map((job: Job) => (
                        <div key={job.id} className="flex justify-evenly">
                            <SavedJobItem
                                 id={job.id}
                                 title={job.jobTitle}
                                 company={job.companyName}
                                 city={job.city}
                                 state={job.state}
                            />
                            <button className="border-2 border-black bg-red-500" onClick={() => handleClick(job.id)}>Remove</button>
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