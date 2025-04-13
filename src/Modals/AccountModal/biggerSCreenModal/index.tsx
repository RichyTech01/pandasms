'use client'
import React, { useState } from "react";

import { ChangePasswordModal } from "./ChangePasswordModal";
import NewPasswordModal from "./NewPasswordModal";

type AccountModalProps = {
    setShowSuccess:React.Dispatch<React.SetStateAction<boolean>>
    setOpenChangePasswordModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AccountModal = ({setOpenChangePasswordModal, setShowSuccess }: AccountModalProps) => {

    const [nextPage, setNextPage] = useState(1);

    const handleNextPgae = () => {
        setNextPage(nextPage + 1);
    }
    
    return ( 
         <div className="md:flex justify-center hidden">
            {nextPage === 1 && <ChangePasswordModal setOpenChangePasswordModal={setOpenChangePasswordModal} handleNextPgae={handleNextPgae} /> }
            {nextPage === 2 && <NewPasswordModal setShowSuccess={setShowSuccess}  setOpenChangePasswordModal={setOpenChangePasswordModal}/> }
         </div>
     );

}
 
export default AccountModal;