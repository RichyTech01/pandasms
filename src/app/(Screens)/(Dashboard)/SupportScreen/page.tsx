'use client'
import { useState } from "react";

import SupportInterface from "@/components/DashboardInterface/SupportInterface";
import SupportChat from "./SupportChat";


const SupportScreen = () => {
    const [showChat, setShowChat] = useState(false)

    return ( 
        <div className=" w-full md:px-[36px] py-[20px]  ">
            {showChat ? 
            <SupportChat/> 
            :
            <SupportInterface setShowChat={setShowChat}/>
          }
           
        </div>
     );
}
 
export default SupportScreen;