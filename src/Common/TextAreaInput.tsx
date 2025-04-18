'use client'

import Image from "next/image";
import CopyIcon from "../../public/DashboardSvg/CopyIcon.svg"

interface InputFieldProps {
    label: string;
    value: string;
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder:string
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
  }

const TextAreaInput = ({ label, value,  placeholder, setCopied, }: InputFieldProps) => {    

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
          <textarea
            placeholder={placeholder}
            className="flex-1 placeholder:text-[#8A8A8A] text-[14px] appearance-none bg-transparent resize-none outline-none placeholder:max-w-[330px] overflow-hidden "
            value={value}
          />
          <button onClick={handleCopy} className="ml-2 ">
            <Image src={CopyIcon} alt="copyIcon" />
          </button>
        </div>
      </div>
   </div>
     );
}
 
export default TextAreaInput;
