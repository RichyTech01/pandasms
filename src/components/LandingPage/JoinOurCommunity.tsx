
import Image from "next/image";

import TelegramImg from "../../../public/Svg/TelegramImg.svg"
import WhatsappImg from "../../../public/Svg/WhatsappImg.svg"

const JoinOurCommunity = () => {
    return ( 
    <div className="bg-[#F9FAFB] h-[271px] center flex-col px-[20px]" id="JoinOurCommunity">
            <div className="flex items-center ">
                <div className="bg-white h-[56px] rounded-[5.56px] flex items-center p-[26.17px]  ">
                    <Image src={TelegramImg} alt="telegram"/>
                    <p className="font-semibold text-[14px]  text-[#131619] leading-[17.64px] ml-[8.34px] ">Telegram</p>
                </div>
                <div className="bg-white h-[56px] rounded-[5.56px] flex items-center p-[26.17px]  ml-[8.34px] ">
                    <Image src={WhatsappImg} alt="WhatsappImg"/>
                    <p className="font-semibold text-[14px]  text-[#131619] leading-[17.64px] ml-[8.34px] ">Telegram</p>
                </div>
            </div>

            <div className="mt-[12px] center flex-col max-w-[385px] ">
                <p className="text-[#131619] font-bold text-[24px] leading-[30.24px] 
                ">Join our Community</p>
                <p className="mt-[8px] text-[14px] leading-[17.64px] text-[#545454] text-center ">Join our 100,000+ person community and contribute to connecting, sharing, and growing together.</p>
            </div>
        </div>
     );
}
 
export default JoinOurCommunity;