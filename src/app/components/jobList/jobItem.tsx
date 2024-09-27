import { Job } from "@/app/types"


interface Props {
    city: string
    company: string 
    title: string
    state: string 
}


const JobItem = async ({ title, company, city, state  }: Props) => {
    
    
    return (
        <div className="border-[1px] flex justify-evenly">
            <div>{title}</div>
            <div>{company}</div>
            <div>{city}</div>
            <div>{state}</div>
        </div>
    )
}



export default JobItem