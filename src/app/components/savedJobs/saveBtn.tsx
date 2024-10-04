"use client";

import { useState, useEffect } from "react";

interface Props {
  id: number;
}

const SaveJobBtn = ({ id }: Props) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    if (isSaved) {
      const timer = setTimeout(() => {
        setIsSaved(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isSaved]);

  const handleClick = () => {
    setIsSaved(true);
    const savedJobs: number[] = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );
    localStorage.setItem("savedJobs", JSON.stringify([id, ...savedJobs]));
  };

  return (
    <div className="flex items-center">
      <button
        className=" bg-orange-300 rounded-md py-1 px-7 mr-2"
        onClick={handleClick}>
        Save
      </button>
      <div className="relative overflow-hidden w-24 h-8">
        <div
          className={`absolute rounded-r-lg inset-y-0 flex items-center justify-center w-full bg-orange-500 text-lg text-white transition-all duration-500 ease-in-out ${
            isSaved ? "left-0" : "-left-full"
          }`}>
          Saved job
        </div>
      </div>
    </div>
  );
};

export default SaveJobBtn;
