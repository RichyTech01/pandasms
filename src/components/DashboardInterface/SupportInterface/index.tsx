'use client'

import Button from "@/Common/Button";
import LargerScreenSupport from "./LargerScreenSupport";
import SmallerScreenTicketTable from "./SmallerScreenTicketTable";
import React from "react";

type SupportProps = {
    setShowChat:React.Dispatch<React.SetStateAction<boolean>>
}

const SupportInterface = ({setShowChat}: SupportProps) => {

    return ( 
        <div className="md:w-full mx-auto  md:bg-[#F9FAFB] md:border-[0.5px] border-[#E6E6E6] lg:px-[48px] mt-[100px] px-[20px] flex-1 py-[30px] md:rounded-[20px] relative md:min-h-[650px] md:h-full h-screen  ">
            <div className=" hidden md:flex flex-row items-center justify-between "> 
                <div>
                    <p className="text-[#131619] text-[16px] font-medium">Support Ticket</p>
                    <p className="text-[#545454] text-[14px] mt-[8px] ">Total Tickets: 1</p>
                </div>
                <div className="max-w-[243px] w-full  ">
                    <Button 
                     label="New Ticket"
                     onClick={() => {}}
                     font="font-normal"
                    />
                </div>
            </div>

            <div className=" hidden md:block">
                <LargerScreenSupport setShowChat={setShowChat} />
            </div>
            <div className="md:hidden">
                <SmallerScreenTicketTable />
            </div>
        </div>
     );
}
 
export default SupportInterface;