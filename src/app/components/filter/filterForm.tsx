import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { IoMdClose } from "react-icons/io"

const FilterForm = () => {
    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [filtered, setFiltered] = useState<boolean>(true)
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        setTitle(searchParams.get('title') || "")
        setCity(searchParams.get('city') || "")
        setState(searchParams.get('state') || "")

        if(searchParams.get('title') || searchParams.get('city') || searchParams.get('state')) {
            setFiltered(true)
        } else {
            setFiltered(false)
        }

    }, [searchParams])

    const clearFilter = (e: React.MouseEvent) => {
        e.preventDefault()  
        router.push(`/`)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        router.push(`?state=${state}&city=${city}&title=${title}`)
    }

    return (
        <div className="p-2 border-b-[1px] border-black flex flex-col flex-wrap">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-[90%] space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-start md:items-center">
                    <label className="text-lg w-full md:w-auto">
                        Title: 
                        <input 
                            type="text" 
                            className="border-[1px] border-black rounded-lg p-1 ml-2 w-full md:w-auto" 
                            placeholder="Title" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
     
                    <label className="text-lg w-full md:w-auto">
                        City:
                        <input 
                            type="text" 
                            className="border-[1px] border-black rounded-lg p-1 ml-2 w-full md:w-auto" 
                            placeholder="City" 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </label>

                    <label className="text-lg w-full md:w-auto">
                        State:
                        <input 
                            type="text" 
                            className="border-[1px] border-black rounded-lg p-1 ml-2 w-full md:w-auto" 
                            placeholder="ST" 
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </label>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2 mt-4 md:mt-0">
                    {filtered && (
                        <button 
                            onClick={clearFilter} 
                            className="border-2 border-red-400 flex items-center justify-center p-1 rounded-lg w-full md:w-auto"
                        >
                            Clear filter<IoMdClose className="ml-1"/>
                        </button>
                    )}
                    
                    <button 
                        type="submit" 
                        className="border-2 border-blue-500 p-1 rounded-lg w-full md:w-auto"
                    >
                        Apply
                    </button>    
                </div>
            </form>
        </div>
    )
}

export default FilterForm
