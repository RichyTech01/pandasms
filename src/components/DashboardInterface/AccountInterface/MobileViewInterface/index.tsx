'use client'

import Image from "next/image";
import UserImg from "../../../../../public/DashboardSvg/AccountIcon.svg"
import CopyImg from "../../../../../public/DashboardSvg/CopyIcon.svg"
import Button from "@/Common/Button";
import LogoutImg from "../../../../../public/DashboardSvg/LogoutIcon.svg"


const statsData = [
    { label: "Total purchase", value: 90 },
    { label: "Funds spent", value: "$90.2" },
    { label: "Total referrals", value: 10 },
    { label: "Earn from referrals", value: "$100" },
  ];

  type AccountMobileScreenProps = {
    isCopied: boolean
    handleCopy: () => void
    setOpenChangePasswordModal: React.Dispatch<React.SetStateAction<boolean>>
  }


const MobileViewInterface = ({isCopied, handleCopy, setOpenChangePasswordModal}: AccountMobileScreenProps) => {
    return ( 
        <div className="bg-[#F9FAFB] h-[100vh] overflow-auto py-[98px]">
            <div className="bg-white mt-[18px] rounded-[12px] mx-[20px] py-[20px] flex flex-col items-center   ">
                <div className="fc flex-col"> 
                    <Image src={UserImg} alt="user-img" className="h-[80px] w-[80px] rounded-full "/>
                <div className=" flex flex-col items-center mt-[20px]">
                    <p className="black text-[16px] font-semibold ">Johndoe@gmail.com</p>
                    <p className="bt text-[14px]  ">Email Verified</p>
                </div>
            </div>

            <div className=" mt-[30px] flex flex-col items-center ">
            {statsData.map((item, index) => (
              <div className=" h-[46px] w-auto px-[36px] center" key={index}>
                <p className="text-[14px] ash ">{item.label}: <span className="black font-medium  ">{item.value}</span> </p>
              </div>
              ))}
            </div>

            <div className="mt-[20px]  ">
              <p className="black font-bold text-[18px]  ">Referral Program</p>
           </div>

                <div className=" max-w-[303px bg-[#F9FAFB] w-ful py-[27px] between px-[21px] mt-[21px] rounded-[12px]  "> 
                    <p className="text-[14px] ash mr-[12px]">Referral ID: <span className=" text-[14px] black">PandaSMS.io/r/128973</span> </p>
                    <Image src={CopyImg} alt="copy-icon " onClick={handleCopy}/>
                </div> 

                <div className=" w-full max-w-[303px] ">
                  <p className="black font-bold text-[18px]  text-center my-[20px]">Security Settings</p>
                  <Button 
                    label="Change password"
                    onClick={() => setOpenChangePasswordModal(prev => !prev)}
                  />
                </div>

                {isCopied && 
           <div className="bt absolute inset-0 z-50 center">
              text copied
            </div>
           }
            </div>

            <div className="fc mt-[30px] center  ">
                 <Image src={LogoutImg} alt="logout-icon"/>
                  <p className="text-[#DF0000] text-[16px] ml-[8px]">Logout</p>
              </div>
        </div>
     );
}
 
export default MobileViewInterface;