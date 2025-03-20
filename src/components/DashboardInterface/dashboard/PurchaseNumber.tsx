

import Image from "next/image";
import SelectCountry from "@/Common/SelectCountry";
import Button from "@/Common/Button";

import Closeicon from "../../../../public/DashboardSvg/CloseIcon.svg"

type PurchaseNumberProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleNextstep: () => void
};


const PurchaseNumber = ({ handleNextstep,  setIsOpen }: PurchaseNumberProps) => {
    return ( 
        <div className="absolute bg-white rounded-[20px] border-[0.5px] border-[#E6E6E6] max-w-[562px] w-full max-h-[437p py-[93px] flex-col center md:mt-[94px] mt-[20px] mx-[20px] ">
        <div className="bg-[#F9FAFB]  w-[26px] h-[28px] rounded-full absolute top-0 right-0 mr-5 mt-5 center cursor-pointer  " onClick={() => setIsOpen(prev => !prev)}>
            <Image src={Closeicon} alt="close-icon"/>
        </div>
        <div className="max-w-[378px] w-full center flex-col ">
        <h2 className="text-[20px] font-bold flex text-center">You want to purchase WhatsApp Number?</h2>

        <div className="mt-[40px] w-full "> 
          <SelectCountry />
        </div>

       <div className="between w-full space-x-[16px] mt-[40px] ">
         <Button 
          label="Cancel"
          onClick={() => setIsOpen(prev => !prev)}  
          BackColor="white"
          textColor="#116EFC"
          BW={1}
          BorderColor="#116EFC"
          />

        <Button 
          label="Continue"
          onClick={handleNextstep}   
        />
      </div>
        </div>
    </div>
     );
}
 
export default PurchaseNumber;
