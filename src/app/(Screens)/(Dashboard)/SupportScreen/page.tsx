'use client'
import { useState } from "react";

import SupportInterface from "@/components/DashboardInterface/SupportInterface";
import SupportChat from "./SupportChat";
import SuccesfullMessage from "@/Common/SuccesfullMessage";


const SupportScreen = () => {

    const [showChat, setShowChat] = useState(false)
    const [showSuccess, setshowSuccess] = useState(false)

    return ( 
        <div className="w-full md:px-[36px] py-[20px] ">
            {showChat ? 
            <SupportChat 
             setShowChat={setShowChat}  
             setshowSuccess={setshowSuccess}
             /> 
            :
            <SupportInterface 
            setShowChat={setShowChat} 
            setshowSuccess={setshowSuccess}
            />
          }
          {showSuccess && 
            <div className="absolute right-0 top-0 z-50 md:mt-16 lg:mr-10 md:mx-[35px] mx-[20px] mt-28 ">
                <SuccesfullMessage 
                  tittle="Ticket Resolved"
                  description="Your support ticket with Ticket ID ##rty55533 has been resolved successfully."
                  handleClose={() =>setshowSuccess(prev => !prev)}
                />
            </div>
        }
        </div>
     );
}
 
export default SupportScreen;