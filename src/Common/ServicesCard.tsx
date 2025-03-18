'use client'
import Image from "next/image";
import WhatsApp from "../../public/DashboardSvg/WhatsappIcon.svg"
import Lovedicon from "../../public/DashboardSvg/LovedIcon.svg"
import InitialLove from "../../public/DashboardSvg/InitialLove.svg"
import { useState } from "react";

const ServicesCard = () => {
    const [loved, setLoved] = useState(false)

    return ( 
        <div className="border-[0.8px] border-[#E6E6E6] rounded-[8px] px-[13px] py-[19px] w-full flex items-start justify-between mt-[12px]">
            <div className="fc ">
                <Image src={WhatsApp} alt="whatsapp"/>
                <div className="ml-[20px] ">
                    <p className="text-[#131619] text-[14px] font-Geint">Telegram</p>
                    <p className="bt text-[14px] mt-[8px] font-Geint">$0.55</p>
                </div>
            </div>

            <div className="" onClick={() => setLoved(prev => !prev)}>
                {loved? <Image src={Lovedicon} alt="loved-"/> : <Image src={InitialLove} alt="loved-"/>}
            </div>

        </div>
     );
}
 
export default ServicesCard;