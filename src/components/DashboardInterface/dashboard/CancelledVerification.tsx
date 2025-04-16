

import CancelIcon from "@/Common/CancelIcon";
import Button from "@/Common/Button";

type CancelledVerificationProps = {
    // handleNextstep: () => void
    setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>
}

const CancelledVerification = ({ setIsOpen}: CancelledVerificationProps) => {
    return ( 
        <div className=" absolute max-w-[555px] bg-white rounded-[20px] border-[0.5px] border-[#E6E6E6] py-[34px] md:px-[38px] px-[16px] w-[90%]  md:mt-[94px] mt-[20px] ">
        <div className="absolute top-0 right-0 mt-[15px] mr-[15px]  ">
          <CancelIcon 
          setIsOpen={setIsOpen}
         />
        </div>
       
        <div className="mt-[58px] mb-[60px]  ">
            <div className="items-center flex-col flex ">
               <p className="text-[20px] font-bold text-[#131619]  text-center flex ">Your verification was cancelled</p>
              <p className="text-[16px] text-[#8A8A8A] mt-[8px] text-center flex">You were not charged. <span className=" md:text-[#116EFC]">Try again</span></p>
            </div>
           
           <div className="mt-[12px] md:hidden mx-[20px] ">
            <Button  
             label="Try again" 
             BackColor="white"
             textColor="#116EFC"
             BW={1}
             BorderColor="#116EFC"
            />
           </div>
        </div>
    </div>
     );
}
 
export default CancelledVerification;