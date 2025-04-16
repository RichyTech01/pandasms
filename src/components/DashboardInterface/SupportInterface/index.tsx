'use client'

import { useState } from "react";
import Button from "@/Common/Button";
import LargerScreenSupport from "./LargerScreenSupport";
import SmallerScreenTicketTable from "./SmallerScreenTicketTable";
import React from "react";
import CreateNewTicketModal from "@/Modals/SupportModals/CreateNewTicketModal";


type SupportProps = {
    setShowChat:React.Dispatch<React.SetStateAction<boolean>>
    setshowSuccess:React.Dispatch<React.SetStateAction<boolean>>
}

const SupportInterface = ({setShowChat, setshowSuccess}: SupportProps) => {

    const [newTicketModal, setNewTicketModal] =useState(false)

    return ( 
        <>
         {newTicketModal && 
        <div className=" w-full z-50 flex justify-center md:bg-transparent bg-[#F9FAFB] h-screen md:h-auto md:static fixed sm:mt-[56px] mt-[92px] ">
             <CreateNewTicketModal setNewTicketModal={setNewTicketModal}/>
           </div>
          }

        <div className={` md:w-full mx-auto md:bg-[#F9FAFB] md:border-[0.5px] border-[#E6E6E6] lg:px-[48px] sm:mt-[50px] md:mt-[100px] mt-[100px] px-[20px] flex-1 py-[30px] md:rounded-[20px] h-screen md:min-h-[650px] md:h-full w-full ${
               newTicketModal ? "blur-sm " : ""
              } `}>
           <div className={` md:w-full mx-auto bg-[#F9FAFB flex-1 h-full  `}>
            <div className=" hidden md:flex flex-row items-center justify-between "> 
                <div>
                    <p className="text-[#131619] text-[16px] font-medium ">Support Ticket</p>
                    <p className="text-[#545454] text-[14px] mt-[8px] ">Total Tickets: 1</p>
                </div>
                <div className="max-w-[243px] w-full  ">
                    <Button 
                     label="New Ticket"
                     onClick={() => setNewTicketModal(true)}
                     font="font-normal"
                    />
                </div>
            </div>

            <div className=" hidden md:block ">
                <LargerScreenSupport 
                setShowChat={setShowChat} 
                setshowSuccess={setshowSuccess} />
            </div>
            <div className="md:hidden">
                <SmallerScreenTicketTable 
                 setShowChat={setShowChat}
                 setshowSuccess={setshowSuccess}
                 setNewTicketModal={setNewTicketModal}
                 />
            </div>
            </div>
        </div>
        </>
     );
}
 
export default SupportInterface;