'use client'
import { useState } from "react";
import PurchaseNumber from "@/components/DashboardInterface/dashboard/PurchaseNumber";
import GetCode from "@/components/DashboardInterface/dashboard/GetCode";


type WantsToPurchaseModal = {
    isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const WantsToPurchaseModal = ({ setIsOpen}: WantsToPurchaseModal) => {

    const [showCountryModal, setShowCountryModal] = useState(false)
    const [step, setStep] = useState<number>(1) 

    const handleNextstep = () => {
        setStep(step + 1)
    }

    return ( 
        <div className="flex justify-center h-full w-full  ">
         {step === 1 && <PurchaseNumber 
           setIsOpen={setIsOpen}
           handleNextstep={handleNextstep}
           showCountryModal={showCountryModal}
           handleshowCountryModal={() => setShowCountryModal(!showCountryModal)} 
          />
        }

          {step === 2 && <GetCode 
            handleNextstep={handleNextstep}
            setIsOpen={setIsOpen} 
          />
        }
       </div>
     );
}
 
export default WantsToPurchaseModal;

