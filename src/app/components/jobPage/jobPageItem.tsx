import SaveJobBtn from "../savedJobs/saveBtn";
import { Job } from "@/app/types";

const JobPageItem = async ({
  city,
  companyName,
  id,
  jobDescription,
  jobTitle,
  requirements,
  state,
}: Job) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-between w-full m-1 md:m-0 md:my-4 md:w-10/12 p-2 pb-10 my-2 border-[1.5px] border-black rounded-lg">
        <div className="flex flex-col justify-between w-full mb-5 md:flex-row md:pl-10 md:mb-0">
          <div className="font-serif text-center md:text-left">
            <h1 className="text-4xl text-orange-500 font-semibold">
              {jobTitle}
            </h1>
            <p>
              {city}, {state}
            </p>
          </div>
          <SaveJobBtn id={id} />
        </div>

        <div className="flex flex-col w-full md:w-3/5 items-center">
          <div className="space-y-7 w-fit">
            <div className="space-x-2 text-lg">
              <h1 className="font-bold">Company</h1>
              <p>{companyName}</p>
            </div>
            <div className="space-x-2 text-lg">
              <h1 className="font-bold">Requirements</h1>
              <p>{requirements}</p>
            </div>
            <div className="space-x-2 text-lg">
              <h1 className="font-bold">Job Description</h1>
              <p>{jobDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPageItem;
