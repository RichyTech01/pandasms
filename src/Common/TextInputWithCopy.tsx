

import React, { useState } from "react";
import Image from "next/image";
import CopyIcon from "../../public/DashboardSvg/CopyIcon.svg"


interface InputFieldProps {
    label: string;
    value: string;
    type?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder:string
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
  }

const TextInputWithCopy = ({ label, type, value,onChange, placeholder, setCopied  }: InputFieldProps) => {

    const handleCopy = () => {
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); 
    };

    return ( 
         <div>
             <div className="flex flex-col gap-1">
          <label className="text-[14px] text-[#131619]  ">{label}</label>
          <div className="flex items-center border border-[#E6E6E6] rounded-[16px] px-[26.59px]  bg-white h-[70px] mt-[12px]  ">
            <input
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="flex-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield] bg-transparent outline-none placeholder:max-w-[330px "
            />
            <button onClick={handleCopy} className="ml-2  ">
              <Image src={CopyIcon} alt="copyIcon" />
            </button>
          </div>
        </div>
        </div>
     );
}
 
export default TextInputWithCopy;