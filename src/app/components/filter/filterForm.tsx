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
        router.push(`/filter?state=${state}&city=${city}&title=${title}`)
    }

    return (
        <div className="border-2 border-slate-500 p-4">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" onChange={(e: any) => {setTitle(e.target.value)}}></input> 
                <input type="text" placeholder="City" onChange={(e: any) => {setCity(e.target.value)}}></input> 
                <input type="text" placeholder="ST" onChange={(e: any) => {setState(e.target.value)}}></input>
                <button type="submit" className="border-2 bg-blue-500 p-1 rounded-lg">filter</button>
            </form>
        </div>
    )
}

export default FilterForm
