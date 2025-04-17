

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Svg/Logo.svg";
import HeaderBot  from "../../../public/DashboardSvg/headerbotImg.svg";
import HeaderPlusIcon  from "../../../public/DashboardSvg/headPlusIcon.svg";
import WalletIcon  from "../../../public/DashboardSvg/walletIcon.svg";
import Hamburger  from "../../../public/DashboardSvg/hamburgerIcon.svg";


const DashboardHeader = () => {
    return ( 
        <div className="bg-white sm:py-[41px] py-[38px] items-center flex md:px-[33px] px-[19.8px] w-full fixed top-0 left-0 z-50 ">
          <div className="between w-full">
            <div className="flex items-center">
                <h1 className="text-[#0F64E5] font-Geint leading-[31.7px] font-bold md:text-[31.7px] flex items-center text-[19.97px]">
                    <Image src={Logo} alt="logo" className="mr-[8.97px]  " priority />
                    PandaSMS
                </h1>

                <div className="items-center ml-[30px] hidden md:flex">
                    <Link href={"/Dashboard"} className="text-[14px] text-[#545454] py-[6px] px-[20px] cursor-pointer hover:text-[#0F64E5] ">Home</Link>
                    <Link href={"/SupportScreen"} className="text-[14px] text-[#545454] ml-[8px] py-[6px] px-[20px] cursor-pointer hover:text-[#0F64E5] ">Support</Link>
                </div>
            </div>

            <div className="fc">
                <Link href={"/SupportScreen"} className="h-[40px] w-[68px] rounded-[16px] bg-[#F9FAFB] center  ">
                    <Image src={HeaderBot} alt="header-bot"/>
                </Link>

                <Link href={"/TopUpScreen"} className="bg-[#131619] hidden md:flex items-center rounded-[16px] py-[16px] px-[18px] ml-[15px]" >
                   <Image src={WalletIcon} alt="HeaderPlus-Icon"/>
                    <p className="text-[18px] font-Geint font-medium text-white mx-[8px] cursor-pointer">$200.34</p>
                    <Image src={HeaderPlusIcon} alt="HeaderPlus-Icon"/>
                </Link>

                <div className="rounded-[12px] h-[40px] w-[40px] bg-[#F9FAFB] center ml-[12px] md:hidden">
                    <Image src={Hamburger} alt="hamburger-icon" />
                </div>
            </div>
         </div>
        </div>
    );
}
 
export default DashboardHeader;
