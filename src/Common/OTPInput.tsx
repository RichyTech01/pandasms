"use client";
import { useState, useRef } from "react";

const OTPInput = ({
  length = 6,
  onComplete,
  label = "Enter OTP",
}: {
  length?: number;
  onComplete?: (otp: string) => void;
  label?: string;
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // If OTP is complete, update parent
    const fullOtp = newOtp.join("");
    if (fullOtp.length === length) {
      onComplete?.(fullOtp);
    } else {
      onComplete?.(""); // Reset if incomplete
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div>
      {/* Label for OTP input */}
      <label className="text-[#131619] text-[14px]  ">{label}</label>
      
      <div className="flex justify-between items-center mt-[12px] ">
        {otp.map((digit, index) => (
          <input
            type="text"
            inputMode="numeric"
            key={index}
            ref={(el) => {
              if (el) inputRefs.current[index] = el;
            }}
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={`md:w-[59px] md:h-[56px] w-[46px] h-[43px] border rounded-xl text-center text-[14px] transition
              focus:outline-none focus:ring-1 focus:ring-[#116EFC] 
              ${digit !== "" ? "border-[#116EFC] ring-1 ring-[#116EFC]" : "border-[#E6E6E6]"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
