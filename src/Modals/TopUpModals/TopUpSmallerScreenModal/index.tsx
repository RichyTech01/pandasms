'use client'

import { useState } from "react";
import ChooseAnAmount from "./SmallChooseAmount";
import SmallerProcessingModal from "./SmallerProcessingModal";

type TopUpScreenProps ={
    setShowModal: (showModal: boolean) => void;
    handleNextPage: () => void
    setNextPage: (nextPage: number) => void
    nextPage: number
}

const SmallerTopUpModal = ({setShowModal, handleNextPage, setNextPage, nextPage}: TopUpScreenProps) => {

    return ( 
        <div className="w-full z-50 mx-auto mt-[120px] h-screen fixed ">
           {nextPage === 1 &&  <ChooseAnAmount 
              handleNextPage={handleNextPage}
              setShowModal={setShowModal}
            />} 

           {nextPage === 2 && <SmallerProcessingModal 
              setShowModal={setShowModal}
            />} 
        </div>
     );
}
 
export default SmallerTopUpModal;