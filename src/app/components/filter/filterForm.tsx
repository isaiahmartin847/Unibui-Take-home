import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

const FilterForm = () => {
    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        setTitle(searchParams.get('title') || "")
        setCity(searchParams.get('city') || "")
        setState(searchParams.get('state') || "")
    }, [searchParams])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        router.push(`?state=${state}&city=${city}&title=${title}`)
    }

    return (
        <div className="p-2 border-b-[1px] border-black">
            <form onSubmit={handleSubmit} className="flex justify-between">
                <div className="w-[90%] space-x-4 flex items-center">
                    <label className="text-lg">
                        Title: 
                        <input 
                            type="text" 
                            className="border-[1px] border-black rounded-lg p-1 ml-2" 
                            placeholder="Title" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
     
                    <label className="text-lg">
                        City:
                        <input 
                            type="text" 
                            className="border-[1px] border-black rounded-lg p-1 ml-2" 
                            placeholder="City" 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </label>

                    <label className="text-lg">
                        State:
                        <input 
                            type="text" 
                            className="border-[1px] border-black rounded-lg p-1 ml-2" 
                            placeholder="ST" 
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </label>
                </div>

                <button type="submit" className="border-2 bg-blue-500 p-1 rounded-lg">filter</button>
            </form>
        </div>
    )
}

export default FilterForm