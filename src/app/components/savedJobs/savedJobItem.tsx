"use client"

import { JobListItem } from "@/app/types"


const SavedJobItem = ({ title, company, city, state, id  }: JobListItem) => {
    
    
    return (
        <div className="border-[1px] flex justify-evenly">
            <div>{title}</div>
            <div>{company}</div>
            <div>{city}</div>
            <div>{state}</div>
        </div>
    )
}



export default SavedJobItem