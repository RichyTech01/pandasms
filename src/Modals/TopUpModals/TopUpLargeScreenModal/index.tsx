'use client'

import ChooseAnAmount from "./ChooseAnAmount";
import ProcessingModal from "./ProcessingModal";


type TopUpScreenProps ={
    setShowModal: (showModal: boolean) => void;
    handleNextPage: () => void
    setNextPage: (nextPage: number) => void
    nextPage: number
}

const TopUpModal = ({setShowModal, handleNextPage, setNextPage, nextPage}: TopUpScreenProps) => {
       
        
    return ( 
        <div className="w-full z-50 mx-auto mt-[100px] md:mt-[0] flex justify-center">
           {nextPage === 1 && <ChooseAnAmount 
              handleNextPage={handleNextPage}
              setShowModal={setShowModal}
            />} 

            {nextPage === 2 && <ProcessingModal 
              setShowModal={setShowModal}
              setNextPage={setNextPage}
            />} 
        </div>
     );
}
 
export default TopUpModal;