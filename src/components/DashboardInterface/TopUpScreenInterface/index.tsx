
'use client'
import PaymentCard from "@/Common/PaymentCard";
import BitCoinImg from "../../../../public/DashboardSvg/Bitcoin.svg"
import TetherUsdt  from "../../../../public/DashboardSvg/TetherImg.svg"
import LiteCoin  from "../../../../public/DashboardSvg/LiteCoin.svg"
import Stripe  from "../../../../public/DashboardSvg/LiteCoin.svg"
import Flutter  from "../../../../public/Flutter.svg"


const TopUpScreenInterface = () => {
    return ( 
        <div className="md:w-full mx-auto  bg-[#F9FAFB] md:border-[0.5px] border-[#E6E6E6] lg:px-[48px] md:py-[45px] mt-[100px] px-[20px] flex-1 py-[30px] md:rounded-[20px] relative md:min-h-[650px] md:h-full h-screen ">
              <div className="md:mt-[35px] md:ml-[48px] ">
                 <p className="text-[16px] text-[#131619] font-semibold  ">Wallet Top-Up</p>
                 <p className="text-[14px] text-[#8A8A8A] mt-[8px]">Top up wallet using crypto and other payment options</p>
              </div>

              <div className="md:mt-[40px] mt-[30px] md:ml-[48px] ">
                 <p className="text-[16px] text-[#131619] font-semibold  ">Wallet Top-Up</p>
                 <p className="text-[14px] text-[#8A8A8A] mt-[8px]">Top up wallet using crypto and other payment options</p>

                 <div className="mt-[13px] flex flex-wrap  gap-[12px]  ">
                    <PaymentCard 
                     title="Bitcoin"
                     icon={BitCoinImg}
                     onClick={() =>{}}
                    />
                      <PaymentCard 
                     title="Tether USDT"
                     icon={TetherUsdt}
                     onClick={() =>{}}
                    />
                      <PaymentCard 
                     title="Litecoin"
                     icon={LiteCoin}
                     onClick={() =>{}}
                    />
                 </div>
              </div>

              <div className="mt-[50px] md:ml-[48px] ">
                 <p className="text-[16px] text-[#131619] font-semibold  ">Wallet Top-Up</p>
                 <p className="text-[14px] text-[#8A8A8A] mt-[8px]">Top up wallet using crypto and other payment options</p>

                 <div className="mt-[13px] flex flex-wrap gap-[12px]">
                    <PaymentCard 
                     title="Pay with Stripe"
                     icon={Stripe}
                     onClick={() =>{}}
                    />
                      <PaymentCard 
                     title="Pay with Flutter"
                     icon={Flutter}
                     onClick={() =>{}}
                    />
                   
                 </div>
              </div>
          </div>
     );
}
 
export default TopUpScreenInterface;