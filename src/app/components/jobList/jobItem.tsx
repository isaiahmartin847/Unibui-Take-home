import Link from "next/link"
import SaveJobBtn from "../savedJobs/saveBtn"
import { JobListItem } from "@/app/types"



const JobItem = async ({ title, company, city, state, id  }: JobListItem) => {
    
    
    return (
        <div className="border-[1px] flex justify-evenly">
            <div>{title}</div>
            <div>{company}</div>
            <div>{city}</div>
            <div>{state}</div>
            <SaveJobBtn id={id}/>
            <Link href={`/job/${id}`}>More</Link> 
        </div>
    )
}



export default JobItem
