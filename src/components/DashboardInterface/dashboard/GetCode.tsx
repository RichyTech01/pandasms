'use client'
import { useState } from "react";
import Image from "next/image";
import Bell from "../../../../public/DashboardSvg/GetcodeBell.svg"
import TextInputWithCopy from "@/Common/TextInputWithCopy";
import TextAreaInput from "@/Common/TextAreaInput";
import CancelIcon from "@/Common/CancelIcon";
import Button from "@/Common/Button";
import ClipBoardSuccess from "@/Common/ClipBoardSuccess";


type GetcodeProps = {
    handleNextstep: () => void
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const GetCode = ({handleNextstep, setIsOpen}: GetcodeProps) => {
    const [numValue, setNumValue] = useState('')
    const [copied, setCopied] = useState(false);

    return ( 
        <div className="absolute max-w-[782px] bg-white rounded-[20px] border-[0.5px] border-[#E6E6E6] py-[34px] md:px-[38px] px-[16px] w-[90%]  md:mt-[94px] mt-[20px]  ">
            <div className="md:flex justify-between items-center hidden">
                <p className="text-[14px]  text-[#131619] ">Time left:<span className="text-[#DF0000]  "> 19:59 </span></p>
                <div className="hidden md:flex">
                  <CancelIcon setIsOpen={setIsOpen}/>
               </div>
            </div>

            <div className="mt-[12px] ">
                <h2 className="text-[#131619] text-[20px] font-bold text-center ">Get code for Whatsapp</h2>
                <div className="bg-[#F9FAFB] rounded-[12px] flex items-start md:py-[13px] md:px-[27px] px-[17px] py-[9px] max-w-[505px] mx-auto mt-[17px]  ">
                   <Image  src={Bell} alt="bell-icon" />
                   <p className="text-[#131619] text-[14px] ml-[12px] ">For best results, connect your VPN/proxy to the country you are purchasing number from. Request code once to avoid delays</p>
                </div>
            </div>

            <div className="relative max-w-[546px] mx-auto md:mt-[40px] mt-[20px] space-y-[20px] ">
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
                  //  onChange={(e) => setNumValue(e.target.value)} 
                   setCopied={setCopied}
                 />

                 <div className="between  ">
                   <div className="bg-[#FFFAE6] rounded-[16px] py-[4px] px-[10px] text-[#FFCC00] text-[14px] max-w-[127px] center  ">
                     Processing
                  </div>
                    <p className="text-[14px]  text-[#131619] md:hidden  ">Time left:<span className="text-[#DF0000]  "> 19:59 </span></p>
                 </div>
               
                {copied && <div className="absolute inset-[90px]  ">
                     <ClipBoardSuccess setShowSuccess={setCopied} />
                </div> }
            </div>

         {/* desktop screen  */}
            <div className="md:flex items-center justify-between max-w-[546px] mx-auto mt-[28px] hidden"> 
                <div className="md:flex items-center hidden ">
                  <CancelIcon setIsOpen={setIsOpen}/>
                  <p className="text-[14px] ml-[12px] text-[#131619]  ">Cancel Verification</p>
                </div>
                <div className="">
                    <Button 
                      label="Report Number"
                      BW={1}
                      BackColor="white"
                      textColor="#0F64E5"
                      width="px-[16px] "
                      BorderColor="#0F64E5"
                      onClick={handleNextstep}
                    />
                 </div>
            </div>

          {/*Smaller screen screen */}
              <div className="gap-y-[16px] flex flex-col mt-[28px]  md:hidden ">
                    <Button 
                      label="Continue"
                    />
                     <Button 
                      label="Cancel"
                      BW={1}
                      BackColor="white"
                      textColor="#0F64E5"
                      width="px-[16px] "
                      BorderColor="#0F64E5"
                    />
               </div>
        </div>
     );
}

export default GetCode;