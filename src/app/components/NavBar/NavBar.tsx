"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


interface Props {
    title: string 
    url: string
    linkName: string
}

const NavBar = ( { title, linkName, url }: Props) => {
    const [filterToggle, setFilterToggle] = useState<boolean>(false)
    const [filter, setFilter] = useState<boolean>(true)
    
    return (
        <div className="flex justify-between items-center h-20 px-5 py-2 border-b-2">
            <div className="w-[200px]">
                <Link href={"/"}>
                    <Image
                        src="https://cdn.prod.website-files.com/665dd714544b997e4b186636/665ea64edb1e20c176359464_unibui_wordmark_orange-p-500.png"
                        alt="Picture of the author"
                        width={160}
                        height={500}
                    />
                </Link>
            </div>

            <div className="w-[200px] flex justify-center items-center ">
                <h1 className="text-[30px] font-mono">{title}</h1>    
            </div>

            <div className="w-[200px] flex justify-center space-x-4">
                {filter? <button className="border-2 border-orange-400 px-2 py-1 rounded-lg">Filter</button>  
                :
                null}
                <Link href={url} className="border-2 border-orange-400 px-2 py-1 rounded-lg">{linkName}</Link>
            </div>
        </div>
    )
}

export default NavBar 