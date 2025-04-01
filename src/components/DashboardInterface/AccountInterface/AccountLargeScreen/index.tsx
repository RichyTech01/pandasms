'use client'

import Image from "next/image";
import UserImg from "../../../../../public/DashboardSvg/AccountIcon.svg"
import LogoutImg from "../../../../../public/DashboardSvg/LogoutIcon.svg"
import CopyImg from "../../../../../public/DashboardSvg/CopyIcon.svg"
import ClipBoardSuccess from "@/Common/ClipBoardSuccess";

const statsData = [
    { label: "Total purchase", value: 90 },
    { label: "Funds spent", value: "$90.2" },
    { label: "Total referrals", value: 10 },
    { label: "Earn from referrals", value: "$100" },
  ];
  
  type AccountLargeScreenProps = {
    isCopied: boolean
    handleCopy: () => void
  }

const AccountLargeScreen = ({handleCopy, isCopied}: AccountLargeScreenProps) => {

    return ( 
        <div className="bd min-h-[750px] mt-[104px] w-full px-[48px] py-[35px]">
           <div>
              <p className="text-[18px] font-bold black ">Account Setting</p>
              <p className="text-[14px] mt-[8px] ash ">Manage your profile and account settings here</p>
           </div>

           <div className="between mt-[41px] ">
              <div className="fc ">
                 <Image src={UserImg} alt="user-img" className="h-[100px] w-[100px] rounded-full "/>
                <div className="ml-[20px] ">
                  <p className="black text-[16px] font-semibold ">Johndoe@gmail.com</p>
                  <p className="bt text-[14px]  ">Email Verified</p>
                </div>                
              </div>
              <div className="fc ">
                 <Image src={LogoutImg} alt="logout-icon"/>
                  <p className="text-[#DF0000] text-[16px] ml-[8px]">Logout</p>
              </div>
           </div>

           <div className=" mt-[30px] flex flex-wrap gap-[20px] ">
            {statsData.map((item, index) => (
              <div className="bd bg-[#F9FAFB] h-[46px] max-w-[186px w-auto px-[36px]  rounded-[12px] center" key={index}>
                <p className="text-[14px] ash ">{item.label}: <span className="black font-medium  ">{item.value}</span> </p>
              </div>
              ))}
           </div>

           <div className="mt-[40px]  ">
              <p className="black font-bold text-[18px]  ">Referral Program</p>
              <p className="ash text-[14px] mt-[8px]  ">Bonus will be added to your wallet balance</p>
           </div>

           <div className="bd rounded-[12px] max-w-[311px] w-full py-[11px] between px-[25px] mt-[21px]  "> 
              <p className="text-[14px] black">Referral ID: <span className="ash ">PandaSMS.io/r/128973</span> </p>
              <Image src={CopyImg} alt="copy-icon " onClick={handleCopy}/>
           </div> 

           <p className="mt-[19px] bt text-[14px] cursor-pointer  ">Change Password</p>

           {isCopied && 
            <div className="absolute inset-0 z-50 center  ">
              <ClipBoardSuccess />
            </div>
           }
        </div>
     );
}
 
export default AccountLargeScreen;

