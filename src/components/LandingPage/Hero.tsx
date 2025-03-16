'use client'
import { useState } from "react";
import Image from "next/image";
import Button from "@/Common/Button";
import HerosecImg from "../../../public/Svg/HeroSecImg.svg"
import Faq from "../../../public/Svg/Faq.svg"
import ServiceImg from "../../../public/Svg/ServiceImg.svg"
import MobileImg from "../../../public/Svg/MobileDashImage.svg"
import Services from "./Services";

const Hero = () => {
    const [activeButton, setActiveButton] = useState('Service')

    return ( 
        <div>
            <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="LandingResp my-[23px] md:my-[132px] text-center md:text-left">
                <div className="md:max-w-[439px]  space-y-[12px] mx-[20px]">
                    <h1 className="text-[24px] md:text-[30px] font-bold leading-[30.24px] md:leading-[37.8px]">
                        Don&apos;t want to give out your phone number? No Problem, use ours
                    </h1>
                    <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[22.68px] text-[#8A8A8A]">
                        Instantly Verify Your Accounts via SMS. Authentic USA Phones, Non Voip.
                    </p>
                </div>


                <div className="flex flex-col md:flex-row items-center gap-[8px] mt-[20px]">
                    {/* Mobile Button  */}

                    <span className="max-w-[204px w-full md:hidden center">
                       <Button label="Get Started" width="max-w-[335px]"/>
                    </span>

                    {/* Desktop button  */}
                    
                    <span className="max-w-[204px] w-full hidden md:block ">
                       <Button label="Get Started" width={"max-w-[204px] "}/>
                    </span>
                    <button className="rounded-[16px] h-[56px] md:max-w-[126px] max-w-[335px] w-full border border-[#116EFC] text-[14px] text-[#116EFC] flex items-center justify-center">
                        <Image src={Faq} alt="faq" className="mr-[4px]" />
                        FAQ
                    </button>
                </div>
            </div>

            {/* Image (Moved to Bottom on Mobile) */}
            <div className=" mt-[30px] md:mt-0 md:order-last LandingRespRight lg:mr-[263px]">
                <Image src={HerosecImg} alt="hd" className="w-full max-w-[300px] md:max-w-none " />
            </div>
        </div>

    {/* category lists*/}

        <div className="bg-[#116EFC] h-auto lg:h-[870px] justify-center fle mt-[30px] px-[20px]">
           <div className="md:pt-[75px] pt-[60px] flex flex-col items-center">
           <div className="h-[56px] w-full max-w-[487px] sm:px-[0px] px-[20px flex items-center gap-[8px] overflow-x-auto mx-[20px scroll-container ">
            <button
                className={`flex-shrink-0 hover:font-semibold rounded-[16px] h-full text-white text-[14px] w-[157px] ${
                    activeButton === "Service" ? "bg-[#FFFFFF1A] font-semibold" : "hover:bg-[#FFFFFF1A]"
                }`}
                onClick={() => setActiveButton("Service")}
            >
                Services
            </button>
            <button
                className={`flex-shrink-0 hover:font-semibold rounded-[16px] h-full text-white text-[14px] w-[157px] ${
                    activeButton === "Get Verification" ? "bg-[#FFFFFF1A] font-semibold" : "hover:bg-[#FFFFFF1A]"
                }`}
                onClick={() => setActiveButton("Get Verification")}
            >
                Get Verification
            </button>
            <button
                className={`flex-shrink-0 hover:font-semibold rounded-[16px] h-full text-white text-[14px] w-[157px] ${
                    activeButton === "Payment Gateway" ? "bg-[#FFFFFF1A] font-semibold" : "hover:bg-[#FFFFFF1A]"
                }`}
                onClick={() => setActiveButton("Payment Gateway")}
            >
                Payment Gateway
            </button>
        </div>

        <div className=" h-auto sm:h-[689px sm:mt-[49.8px] mt-[30px] sm:max-w-[962px] max-w-[] w-full sm:bg-white rounded-tl-[16px] rounded-tr-[16px] center sm:p-[20px]  ">
            <Image 
                src={ServiceImg} 
                alt="image" 
                className="mx-auto hidden sm:block max-w-full h-auto "
                objectFit="contain"
            />
            <Image 
                src={MobileImg} 
                alt="Mobile Img" 
                className="sm:hidden max-w-full h-auto mx-auto mt-[13px] "
            />
        </div>
            </div>
        </div>


        <div className="bg-[#F9FAFB] min-h-[523px] h-full px-[20px] ">
            <Services />
        </div>
        </div>
     );
}
 
export default Hero;