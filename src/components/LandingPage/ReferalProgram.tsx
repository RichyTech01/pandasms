import Image from "next/image";
import Button from "@/Common/Button";
import ReferImg from "../../../public/Img/ReferImg.png"



const ReferalProgram = () => {

    return ( 
        <div className="md:h-[431px] min-h-[620px] md:px-[150px px-[20px] center md:flex-row flex-col lg:gap-[150px] mx-[20px] md:gap-[30px] mt-[20px] ">
            <div className="max-w-[439px]  w-full flex-col center md:items-start md:my-[0px] my-[30px]">
                <div className=" max-w-[350px] "> 
                    <p className="text-[#131619] font-bold md:text-[40px] text-[20px] leading-[25.2px] md:leading-[50.98px] font-Geint text-center ">Referral Programs</p>
                    <p className="text-[#8A8A8A] text-[14px] md:text-[16px] leading-[17.64px] md:leading-[20.16px] mt-[12px] text-center md:text-start ">You can earn money with us. Invite people and
                    get a good reward!</p>
                </div>
                
                <button className="bg-[#116EFC] rounded-[12px] h-[56px] center text-[14px] font-semibold leading-[17.64px] text-white px-[16px] mt-[20px] max-w-[335px] w-full md:max-w-[204px] ">
                    Create account 
                </button>
            </div>

            <div className="order-first md:order-last   ">
                <Image src={ReferImg} alt="refImage"/>
            </div>
        </div>
     );
}
 
export default ReferalProgram;