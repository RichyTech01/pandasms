'use client'
import SmallerScreen from "@/components/DashboardInterface/VerificationInterface/SmallerScreen";
import LargerScreen from "@/components/DashboardInterface/VerificationInterface/LargerScreen";

const Verification = () => {
    return ( 
        <div className="bg-white w-full lg:px-[48px] md:pt-[45px] mt-[120px] px-[20px] flex-1 rounded-[20px] relative ">
            <h1 className="text-[#131619] text-[18px] font-bold ">Verification History</h1>
            <div className="mt-[20px] ">
            <div className="md:hidden">
              <SmallerScreen />
            </div>
            <div className="hidden md:flex  ">
                <LargerScreen />
            </div>
            </div>
        </div>
     );
}
 
export default Verification;
