"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FilterForm from "@/app/components/filter/filterForm";

// Documentation for this component can be found at:
// /docs/components_&_pages/navbar.md

interface Props {
  title: string;
  url: string;
  linkName: string;
  filter: boolean;
}

const Navbar = ({ title, linkName, url, filter }: Props) => {
  const [filterToggle, setFilterToggle] = useState<boolean>(false);

  const handleClick = () => {
    setFilterToggle(!filterToggle);
  };

  return (
    <div className="sticky top-0 bg-white">
      <div className="flex justify-between items-center h-20 px-5 py-2 border-b-2 border-black ">
        {/* Logo Section */}
        <div className="w-[200px]">
          <Link href={"/"}>
            <Image
              src="https://cdn.prod.website-files.com/665dd714544b997e4b186636/665ea64edb1e20c176359464_unibui_wordmark_orange-p-500.png"
              alt="Unibui Logo"
              width={160}
              height={100}
              priority
            />
          </Link>
        </div>

        {/* Title Section - Hidden on mobile */}
        <div className="w-[200px] justify-center items-center hidden md:flex">
          <h1 className="text-[30px] font-mono">{title}</h1>
        </div>

        {/* Buttons Section */}
        <div className="w-[200px] flex justify-center space-x-4">
          {filter ? (
            <button
              className="border-2 border-orange-400 px-2 py-1 rounded-lg"
              onClick={handleClick}>
              Filter
            </button>
          ) : null}

          <Link
            href={url}
            className="border-2 border-orange-400 px-2 py-1 rounded-lg">
            {linkName}
          </Link>
        </div>
      </div>

      {/* Filter Form Toggle */}
      {filterToggle ? <FilterForm /> : null}
    </div>
  );
};

export default Navbar;
