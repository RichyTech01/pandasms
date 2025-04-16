import Image from "next/image";
import SearchInput from "./SearchInput";

import Flag from "../../public/Svg/flagImg.svg"

const CountryModal = () => {


    return ( 
        <div className="bg-[#F9FAFB] rounded-[20px] w-[90% w-ful  h-[320px] py-[54px] px-[43px]  ">
            <div>
                <SearchInput 
                  placeholder="Search country / code"
                />
                <div className="mt-[18px] ">
                    <div className="between p-[8px] ">
                       <div className="fc ">
                          <Image src={Flag} alt="flag-img"/>  
                          <p className="text-[14px] text-[#131619] font-semibold ml-[8px]">USA</p>
                       </div> 
                       <p className="text-[#131619] text-[12px] ">+1</p>
                    </div>
                    <div className="between p-[8px] ">
                       <div className="fc ">
                          <Image src={Flag} alt="flag-img"/>  
                          <p className="text-[14px] text-[#131619] font-semibold ml-[8px]">USA</p>
                       </div> 
                       <p className="text-[#131619] text-[12px] ">+1</p>
                    </div>
                    <div className="between p-[8px] ">
                       <div className="fc ">
                          <Image src={Flag} alt="flag-img"/>  
                          <p className="text-[14px] text-[#131619] font-semibold ml-[8px]">USA</p>
                       </div> 
                       <p className="text-[#131619] text-[12px] ">+1</p>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default CountryModal;