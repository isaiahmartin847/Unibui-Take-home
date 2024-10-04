"use client";

import React from "react";
import { JobListItem } from "@/app/types";
import Link from "next/link";

interface HandleClickProps {
  handleClick: (id: number) => void;
}

type Props = JobListItem & HandleClickProps;

const SavedJobItem: React.FC<Props> = ({
  title,
  company,
  city,
  state,
  id,
  handleClick,
}) => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-5/12 h-40 p-2 my-2 mx-1 border-[1.5px] border-black rounded-lg shadow-md">
        <div className="space-y-3 space-x-5 w-5/6 md:w-3/5 md:pl-10">
          <div className="text-2xl font-serif font-semibold text-orange-500">
            {title}
          </div>
          <div>
            <div className="text-[16px]">
              <span className="">Company</span>: {company}
            </div>
            <div>
              {city}, {state}
            </div>
          </div>
        </div>

        <div className="w-5/6 flex justify-between md:w-2/5 pr-6">
          <button
            className=" bg-red-500 rounded-md py-1 px-7 mr-2"
            onClick={() => {
              handleClick(id);
            }}>
            Remove
          </button>
          <Link
            href={`/job/${id}`}
            prefetch={true}
            className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200 transition duration-150 ease-in-out">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SavedJobItem;
