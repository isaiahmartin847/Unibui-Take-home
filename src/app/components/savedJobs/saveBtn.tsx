"use client"



interface Props {
    id: number
}


const SaveJobBtn = ( { id }: Props) => {


    const handleClick = () => {
        const savedJobs: number[] = JSON.parse(localStorage.getItem("savedJobs") || "[]");
        localStorage.setItem("savedJobs", JSON.stringify([...savedJobs, id]));
    }



    return (
        <div>
            <button className="border-2 border-black bg-blue-400 rounded-md px-1" onClick={handleClick}>Save</button>
        </div>
    )
}

export default SaveJobBtn