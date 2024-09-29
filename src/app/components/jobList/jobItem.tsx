import Link from "next/link"

interface Props {
    id: number
    city: string
    company: string 
    title: string
    state: string 
}


const JobItem = async ({ title, company, city, state, id  }: Props) => {
    
    
    return (
        <div className="border-[1px] flex justify-evenly">
            <div>{title}</div>
            <div>{company}</div>
            <div>{city}</div>
            <div>{state}</div>
            <Link href={`/job/${id}`}>More</Link> 
        </div>
    )
}



export default JobItem