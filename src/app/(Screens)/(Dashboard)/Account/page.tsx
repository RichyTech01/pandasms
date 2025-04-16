'use client'


import { useState } from "react";
import AccountLargeScreen from "@/components/DashboardInterface/AccountInterface/AccountLargeScreen";
import MobileViewInterface from "@/components/DashboardInterface/AccountInterface/MobileViewInterface";
import AccountModal from "@/Modals/AccountModal/biggerSCreenModal";
import { SmallerAccountModals } from "@/Modals/AccountModal/SmallerScreenModal";
import SuccesfullMessage from "@/Common/SuccesfullMessage";
import SuccesMessageMobile from "@/Common/SuccesMessageMobile";


const Account = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  

  const handleCopy = () => {
    setIsCopied((prev) => !prev);
  };


  return (
    <>
      {showSuccess && 
       <div className="z-50 absolute right-0 mt-44 hidden md:flex mr-9   ">
          <SuccesfullMessage
            tittle="New Password Set"
            description="New password created. Access your account using your new password."
            handleClose={() => setShowSuccess(prev => !prev)}
           />
       </div>
      }
  
     {showSuccess && 
       <div className="z-50  ">
          <SuccesMessageMobile
            // tittle="New Password Set"
            // description="New password created. Access your account using your new password."
            // handleClose={() => setShowSuccess(prev => !prev)}
           />
       </div>
      }

    <div className="md:flex justify-center  ">
      {openChangePasswordModal && <AccountModal setShowSuccess={setShowSuccess} setOpenChangePasswordModal={setOpenChangePasswordModal}/>}
    </div>

    {openChangePasswordModal && 
    <div className="md:hidden justify-center bg-white h-screen z-50 fixed inset-0 ">
       {openChangePasswordModal && <SmallerAccountModals setShowSuccess={setShowSuccess} setOpenChangePasswordModal={setOpenChangePasswordModal}/>}   
    </div>
    }

      <div
        className={`w-full md:px-[36px] py-[20px]  ${
          openChangePasswordModal ? "blur-sm " : ""
        }`}
      >
        <div className="hidden md:flex relative bg-white z-0">
          <AccountLargeScreen setIsCopied={setIsCopied} setShowSuccess={setShowSuccess} handleCopy={handleCopy} isCopied={isCopied} setOpenChangePasswordModal={setOpenChangePasswordModal}/>
        </div>

        <div className={`md:hidden relative ${showSuccess && "-z-10 " } `}>
          <MobileViewInterface isCopied={isCopied} handleCopy={handleCopy} setOpenChangePasswordModal={setOpenChangePasswordModal}/>
        </div>
      </div>
    </>
  );
};

export default Account;