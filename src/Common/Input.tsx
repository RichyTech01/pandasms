import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type:string
  textSize?: string 
}

const Input: React.FC<InputProps> = ({type, textSize="text-[10px]",  label, ...props }) => {
  return (
    <div className="flex flex-col space-y-[12px]  ">
      <label className="text-[#131619] text-[14px]  ">
        {label}
      </label>
      <input
        type={type}
        className={`border border-[#E6E6E6] px-[26.59px] h-[70px] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#116EFC] placeholder:text-[14px]  placeholder:text-[#8A8A8A] text-[#8A8A8A]  transition-all ${textSize} `}
        {...props}
      />
    </div>
  );
};

export default Input;
