'use client'
import { useState } from "react";

import SmallerNewPasswordModal from "./SmallerNewPasswordModal";
import ChangePasswordModal from "./ChangePasswordModal";
import React from "react";


type SmallerAccountModalsProps = {
    setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>
    setOpenChangePasswordModal:React.Dispatch<React.SetStateAction<boolean>>
}

export const SmallerAccountModals = ({setOpenChangePasswordModal, setShowSuccess}: SmallerAccountModalsProps) => {

    const [nextPage, setNextPage] = useState(1);
    
        const handleNextPage = () => {
            setNextPage(nextPage + 1);
        }

    return ( 
        <div>
           {nextPage === 1 && <ChangePasswordModal handleNextPage={handleNextPage}/>} 
           {nextPage === 2 && <SmallerNewPasswordModal setShowSuccess={setShowSuccess} setOpenChangePasswordModal={setOpenChangePasswordModal}/>} 
        </div>
     );
}