'use client'


import FAQAccordion from "@/components/LandingPage/FAQAccordion";

const FaqSec = () => {

   

    return ( 
        <div className="bg-white min-h-[455px] md:mt-[35px] mt-[28px] " id="FaqSec">
            <div className="center flex-col ">
                <p className="text-[#131619] font-bold leading-[30.59px] font-Geint text-[24px]  ">Frequently Asked Questions</p>
                <p className="text-[16px] text-[#6B6892] leading-[20.16px] mt-[4px] ">Question & Answer</p>
            </div>

            <div className="mb-[30px] mt-[30px] max-w-[1141px] w-full mx-auto ">
               <FAQAccordion/>
            </div>

        </div>
     );
}
 
export default FaqSec;