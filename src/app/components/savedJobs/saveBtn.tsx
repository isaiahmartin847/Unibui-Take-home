"use client"



interface Props {
    id: number
}


const SaveJobBtn = ( { id }: Props) => {


    const handleClick = () => {
        const savedJobs: number[] | null = JSON.parse(localStorage.getItem("savedJobs") || "null");

        if(savedJobs) {
            const updatedJobs = [...savedJobs, id]

            localStorage.setItem("savedJobs", JSON.stringify(updatedJobs))
        } else {
            localStorage.setItem("savedJobs", JSON.stringify([id]))
        }



    }



    return (
        <div>
            <button className="border-2 border-black bg-blue-400 rounded-md px-1" onClick={handleClick}>Save</button>
        </div>
    )
}

export default SaveJobBtn