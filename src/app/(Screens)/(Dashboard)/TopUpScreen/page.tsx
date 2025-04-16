'use client'
import { useState } from "react";

import TopUpScreenInterface from "@/components/DashboardInterface/TopUpScreenInterface";
import TopUpModal from "@/Modals/TopUpModals/TopUpLargeScreenModal";
import SmallerTopUpModal from "@/Modals/TopUpModals/TopUpSmallerScreenModal";


const TopUpScreen = () => {

  const [showModal, setShowModal] = useState(false) 
  const [nextPage, setNextPage] = useState(1);
   
       const handleNextPage = () => {
           setNextPage(nextPage + 1);
       }

    return ( 
      <>
        <div className=" hidden md:flex justify-center w-full z-50 ">
          {showModal && 
            <TopUpModal nextPage={nextPage} setNextPage={setNextPage} handleNextPage={handleNextPage} setShowModal={setShowModal} />
          }
         </div>

         <div className="flex md:hidden bg-[#F9FAFB] ">
        {showModal && 
            <SmallerTopUpModal nextPage={nextPage} setNextPage={setNextPage} handleNextPage={handleNextPage} setShowModal={setShowModal} />
         }
         </div>

        <div className={` w-full md:px-[36px] py-[20px]   ${
          showModal ? "blur-sm" : ""
        } `}>

          <TopUpScreenInterface setShowModal={setShowModal}/>
        </div>
      </>
     );
}
 
export default TopUpScreen; 

