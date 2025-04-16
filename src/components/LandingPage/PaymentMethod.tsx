import Image from "next/image"

import BitcoinImg from "../../../public/Svg/BitcoinImg.svg"
import TetherImg from "../../../public/Svg/TetherUsdt.svg"
import LiteCoinImg from "../../../public/Svg/LiteCoin.svg"
import StripeImg from "../../../public/Svg/Stripe.svg"
import FlutterImg from "../../../public/Svg/Flutter.svg"


const PaymentMethod = () => {
    return ( 
        <div className="bg-[#F9FAFB] md:h-[231px] h-[212px] center flex-col mt-[30px]  ">
            <div>
                <p className="font-bold text-[24px] leading-[30.24px] ">Accepted Payment Method</p>
            </div>

            <div className="mt-[30px] flex items-center gap-[8px] overflow-x-auto w-full px-[20px] whitespace-nowrap scroll-container ">
            <div className="bg-white rounded-[5.56px] h-[56.96px] w-[104.2px] gap-[8.34px] center flex-shrink-0">
                    <Image src={BitcoinImg} alt="BitcoinImg" />
                    <p className="text-[#131619] text-[9.73px] font-Geint">Bitcoin</p>
                </div>

                <div className="bg-white rounded-[5.56px] h-[56.96px] w-[125.74px] gap-[8.34px] center flex-shrink-0">
                    <Image src={TetherImg} alt="TetherImg" />
                    <p className="text-[#131619] text-[9.73px] font-Geint">Tether USDT</p>
                </div>

                <div className="bg-white rounded-[5.56px] h-[56.96px] w-[113.23px] gap-[8.34px] center flex-shrink-0">
                    <Image src={LiteCoinImg} alt="LiteCoinImg" />
                    <p className="text-[#131619] text-[9.73px] font-Geint">Litecoin</p>
                </div>

                <div className="bg-white rounded-[5.56px] h-[56.96px] w-[104.9px] gap-[8.34px] center flex-shrink-0">
                    <Image src={StripeImg} alt="StripeImg" />
                    <p className="text-[#131619] text-[9.73px] font-Geint">Stripe</p>
                </div>

                <div className="bg-white rounded-[5.56px] h-[56.96px] w-[105.59px] gap-[8.34px] center flex-shrink-0">
                    <Image src={FlutterImg} alt="FlutterImg" className="rounded-full" />
                    <p className="text-[#131619] text-[9.73px] font-Geint">Flutter</p>
                </div>
            </div>
        </div>
     );
}
export default PaymentMethod;