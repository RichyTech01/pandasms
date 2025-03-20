"use client";

import { useState } from "react";
import Image from "next/image";
import SearchIcon from "../../public/DashboardSvg/Search.svg";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative">
      <Image src={SearchIcon} alt="search-icon" width={20} height={20} className="absolute left-3 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search service"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-10 w-full pr-4 h-[56px] border border-[#E6E6E6] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0F64E5] text-gray-700"
      />
    </div>
  );
};

export default SearchInput;
