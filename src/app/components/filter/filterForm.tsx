"use client"

import { useRouter } from "next/navigation" // Updated import
import { useState } from "react"

const FilterForm = () => {
    const [title, setTitle] = useState<string>("undefined")
    const [city , setCity] = useState<string>("undefined") 
    const [state, setState] = useState<string>("undefined") 
    const router = useRouter()



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() 
        router.push(`/?state=${state}&city=${city}&title=${title}`)
    }

    return (
        <div className="p-2 border-b-[1px] border-black">
            <form onSubmit={handleSubmit} className="flex justify-between">
                
                <div className="w-[90%] space-x-4 flex items-center">
                    <label className="text-lg">
                        Title: 
                        <input type="text" className="border-[1px] border-black rounded-lg p-1 ml-2" placeholder="Title" onChange={(e: any) => {setTitle(e.target.value)}}></input> 
                    </label>
     
                    <label className="text-lg">
                        City:
                        <input type="text" className="border-[1px] border-black rounded-lg p-1 ml-2" placeholder="City" onChange={(e: any) => {setCity(e.target.value)}}></input> 
                    </label>

                    <label className="text-lg">
                        State:
                        <input type="text" className="border-[1px] border-black rounded-lg p-1 ml-2" placeholder="ST" onChange={(e: any) => {setState(e.target.value)}}></input>
                    </label>
                </div>

                <button type="submit" className="border-2 bg-blue-500 p-1 rounded-lg">filter</button>
            </form>
        </div>
    )
}

export default FilterForm
