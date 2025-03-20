'use client'
import { useState } from "react";
import Image from "next/image";
import Bell from "../../../../public/DashboardSvg/GetcodeBell.svg"
import TextInputWithCopy from "@/Common/TextInputWithCopy";
import TextAreaInput from "@/Common/TextAreaInput";
import CancelIcon from "@/Common/CancelIcon";
import Button from "@/Common/Button";

type GetcodeProps ={
    handleNextstep: () => void
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const GetCode = ({handleNextstep, setIsOpen}: GetcodeProps) => {
    const [numValue, setNumValue] = useState('')
    const [copied, setCopied] = useState(false);

    return ( 
        <div className="absolute max-w-[782px] w-full bg-white rounded-[20px] border-[0.5px] border-[#E6E6E6] py-[34px] px-[38px] mt-[94px]  ">
            <div className="between ">
                <p className="text-[14px]  text-[#131619] ">Time left:<span className="text-[#DF0000]  "> 19:59 </span></p>

               <CancelIcon setIsOpen={setIsOpen}/>
            </div>

            <div className="mt-[12px] ">
                <h2 className="text-[#131619] text-[20px] font-bold text-center ">Get code for Whatsapp</h2>
                <div className="bg-[#F9FAFB] rounded-[12px] flex items-start py-[13px] px-[27px] max-w-[505px] mx-auto mt-[17px]  ">
                   <Image  src={Bell} alt="bell-icon" />
                   <p className="text-[#131619] text-[14px] ml-[12px] ">For best results, connect your VPN/proxy to the country you are purchasing number from. Request code once to avoid delays</p>
                </div>
            </div>

            <div className="relative max-w-[546px] mx-auto mt-[40px] space-y-[20px] ">
                <TextInputWithCopy 
                   label="Use this phone number for Whatsapp" 
                   value={numValue}
                   type="number"
                   onChange={(e) => setNumValue(e.target.value)} 
                   placeholder="+123456789"
                   setCopied={setCopied}
                 />
                 
                 <TextAreaInput 
                   label="Message" 
                   placeholder="Please request only one code. Multiple request may result in issues with your code."
                   value={numValue}
                   onChange={(e) => setNumValue(e.target.value)} 
                   setCopied={setCopied}
                 />
                <div className="bg-[#FFFAE6] rounded-[16px] py-[4px] px-[10px] text-[#FFCC00] text-[14px] max-w-[127px] center  ">
                  Processing
                </div>
                {copied && <div className="bt bg-white rounded-[16px] text-[12px] font-medium cente mx-auto max-w-[200px] max-h-[30px] center absolute inset-[90px] ">
                    Copied to clipboard
                </div> }
            </div>

            <div className="between max-w-[546px] mx-auto mt-[28px]  "> 
                <div className="flex items-center ">
                  <CancelIcon setIsOpen={setIsOpen}/>
                  <p className="text-[14px] ml-[12px] text-[#131619]  ">Cancel Verification</p>
                </div>
                <div>
                    <Button 
                      label="Report Number"
                      BW={1}
                      BackColor="white"
                      textColor="#0F64E5"
                      width="px-[16px] "
                      BorderColor="#0F64E5"
                    />
                </div>
            </div>
        </div>
     );
}

export default GetCode;