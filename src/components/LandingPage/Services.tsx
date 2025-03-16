import Image from "next/image";
import InstantVerif from "../../../public/Svg/InstantVerif.svg"
import SecuredAndRelieble from "../../../public/Svg/SecuredAndReliable.svg"
import HighQuality from "../../../public/Svg/HighQuality.svg"


const Services = () => {
    return ( 
        <div className="xl:mx-[150.5px] lg:mx-[50px] flex flex-col md:flex-row justify-center sm:pt-[111px] py-[20px] md:gap-[40px] gap-[12px] center ">
            <div className="h-[290px] max-w-[353px] w-full rounded-[16px] bg-white p-[27.3px] ">
                <Image src={InstantVerif} alt="instantVerif" className=" mx-auto"/>
                <div className="flex-col space-y-[4px mt-[24px] max-w-[287px] w-full mx-auto">
                    <p className="font-bold text-[18px] leading-[22.68px] text-[#131619] text-center  ">Instant Verification</p>
                    <p className="text-center text-[#8A8A8A] fornt-normal text-[14px] leading-[17.64px] ">Verification of any service will take you 1 minute, our services work very fast.</p>
                </div>
            </div>
            
            <div className="h-[290px] max-w-[353px] w-full rounded-[16px] bg-white py-[12.3px] md:px-[27.73px] px-[24px]">
                <Image src={HighQuality} alt="HighQuality" className=" mx-auto"/>
                <div className="flex-col space-y-[4px] mt-[4px] max-w-[287px] w-full mx-auto">
                    <p className="font-bold text-[18px] leading-[22.68px] text-[#131619] text-center  ">High Quality</p>
                    <p className="text-center text-[#8A8A8A] fornt-normal text-[14px] leading-[17.64px] ">We are working on the quality of services!</p>
                </div>
            </div>

            <div className="h-[290px] max-w-[353px] w-full rounded-[16px] bg-white p-[27.73px] ">
                <Image src={SecuredAndRelieble} alt="SecuredAndRelieble" className=" mx-auto"/>
                <div className="flex-col space-y-[4px] mt-[24px] max-w-[287px] w-full mx-auto">
                    <p className="font-bold text-[18px] leading-[22.68px] text-[#131619] text-center  ">Secured & Reliable</p>
                    <p className="text-center text-[#8A8A8A] fornt-normal text-[14px] leading-[17.64px] ">You have nothing to worry about!</p>
                </div>
            </div>
        </div>
     );
}
 
export default Services;