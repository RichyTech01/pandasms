

import Image from "next/image";
import SelectCountry from "@/Common/SelectCountry";
import Button from "@/Common/Button";
import CountryModal from "@/Common/CountryModal";
import Closeicon from "../../../../public/DashboardSvg/CloseIcon.svg"

type PurchaseNumberProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleNextstep: () => void
    showCountryModal: boolean
    handleshowCountryModal: () => void
};


const PurchaseNumber = ({ handleNextstep, setIsOpen, handleshowCountryModal, showCountryModal }: PurchaseNumberProps) => {
  return ( 
      <div className="relative bg-white rounded-[20px] border-[0.5px] border-[#E6E6E6] max-w-[562px] w-[90%] max-h-[437px] py-[93px] flex-col center md:mt-[94px] mt-[20px] mx-auto ">
      <div className="bg-[#F9FAFB] w-[26px] h-[28px] rounded-full  top-0 right-0 mr-5 mt-5 center cursor-pointer !hidden md:absolute  " onClick={() => setIsOpen(prev => !prev)}>
          <Image src={Closeicon} alt="close-icon"/>
      </div>
      <div className="md:max-w-[378px] px-[20px] w-full center flex-col ">
          <h2 className="text-[20px] font-bold flex text-center ">You want to purchase WhatsApp Number?</h2>

          <div className="md:mt-[40px] mt-[20px] w-full "> 
            <SelectCountry 
             onClick={handleshowCountryModal}
            />
            {showCountryModal && 
            <div className="mt-[15px]"> 
              <CountryModal />
            </div>
            }
          </div>

         <div className=" items-center justify-between flex md:flex-row flex-col w-full md:space-x-[16px] mt-[40px] space-y-[16px] md:space-y-[0px]  ">
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
export default PurchaseNumber