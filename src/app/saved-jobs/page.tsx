"use client";

import { useState, useEffect } from "react";
import SavedJobItem from "../components/savedJobs/savedJobItem";
import { Job } from "../types";
import { ScaleLoader } from "react-spinners";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

// Documentation for this component can be found at:
// /docs/components_&_pages/saved_jobs.md

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedJobsFromStorage = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );
    setSavedJobs(savedJobsFromStorage);

    const fetchJobs = async () => {
      if (savedJobsFromStorage.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:3000/api/job?ids=${savedJobsFromStorage.join(",")}`
        );
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
  };

  if (loading) {
    return (
      <div>
        <Navbar
          linkName="home"
          title="Saved Jobs"
          url="/"
          filter={false}
        />
        <div className="flex flex-col items-center mt-10">
          <ScaleLoader color="#f97316" />
          <div className="text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar
          linkName="home"
          title="Saved Jobs"
          url="/"
          filter={false}
        />
        <div>Error: {error}</div>;
      </div>
    );
  }

  return (
    <div>
      <Navbar
        linkName="home"
        title="Saved Jobs"
        url="/"
        filter={false}
      />
      {data.length > 0 ? (
        <div>
          {data.map((job: Job) => (
            <div
              key={job.id}
              className="flex justify-evenly">
              <SavedJobItem
                id={job.id}
                title={job.jobTitle}
                company={job.companyName}
                city={job.city}
                state={job.state}
                handleClick={handleClick}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-xl">You have no saved jobs?</h1>
          <Link
            href="/"
            prefetch={true}
            className="border-2 border-orange-400 p-2 mt-2 hover:bg-orange-400 rounded-md">
            Back to jobs
          </Link>
        </div>
      )}
    </div>
  );
};

export default SavedJobs;
