"use client"

import { useState } from "react"



interface Props {
    id: number
}


const SaveJobBtn = ( { id }: Props) => {
    const [isSaved, setIsSaved] = useState<boolean>(false)


    const handleClick = () => {

        setIsSaved(true);

        const savedJobs: number[] = JSON.parse(localStorage.getItem("savedJobs") || "[]");
        localStorage.setItem("savedJobs", JSON.stringify([...savedJobs, id]));

        setTimeout(() => {
            setIsSaved(false);
        }, 500);
      
    }



    return (
        <div>

            
            <button className={`border-2 border-black rounded-md px-1 ${isSaved? "bg-blue-300" : null}`} onClick={handleClick}>{isSaved? "Saved!" : "Save"}</button>
        </div>
    )
}

export default SaveJobBtn