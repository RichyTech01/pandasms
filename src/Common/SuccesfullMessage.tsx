'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import SuccesImg from "../../public/Svg/SuccesMessageIcon.svg"
import Button from "./Button";


const SuccesfullMessage = () => {

    const router = useRouter()

    return ( 
        <div>
            {/* desktop succesfull cdesign */}
            <div className="bg-[#F9FAFB] rounded-[16px] hidden md:flex py-[27.2px] px-[26px] w-[480px] absolute top-0 right-0 items-center  mt-36 mr-20 ">
                <Image src={SuccesImg} alt="succes-img" />
                <div className="ml-[30px] max-w-[305px] ">
                    <p className="bt text-[16px] ">Password Changed</p>
                    <p className=" text-[14px]  text-[#131619] mt-[8px] ">Your password has been changed successfully. Login to access accountd</p>
                </div>
            </div>


            {/* Mobile succesfull design */}
           <div className="absolute h-screen/[102px] inset-0 flex flex-col items-center md:hidden pt-[98px] mt-[102px] bg-white">
                <div className="max-w-[305px] w-full flex flex-col items-center text-center ">
                    <Image src={SuccesImg} alt="success-img" className="w-[80px] h-[80px]" />
                    <p className="text-[18px] font-semibold text-[#116EFC] mt-[20px]">Password Changed</p>
                    <p className="text-[14px] text-[#131619] mt-[8px]"> 
                    Your password has been changed successfully. Login to access account
                    </p>
                </div>

                <div className="w-full px-6 absolute bottom-24 max-w-[335px] ">
                    <Button label="Login" onClick={() => router.push('/SignIn')}  />
                </div>
            </div>
        </div>
     );
}
 
export default SuccesfullMessage;