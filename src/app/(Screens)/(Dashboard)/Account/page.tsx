'use client'
import { useState } from "react";
import AccountLargeScreen from "@/components/DashboardInterface/AccountInterface/AccountLargeScreen";
import MobileViewInterface from "@/components/DashboardInterface/AccountInterface/MobileViewInterface";


const Account = () => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    setIsCopied(prev => !prev)
  }

    return ( 
       <div className="w-full md:px-[36px] py-[20px] ">
          <div className="hidden md:flex">
              <AccountLargeScreen 
               handleCopy={handleCopy}
               isCopied={isCopied}
              />
          </div>
          <div className="md:hidden  ">
              <MobileViewInterface 
              isCopied={isCopied}
              handleCopy={handleCopy}
               />
          </div>
       </div>
     );
}
 
export default Account;