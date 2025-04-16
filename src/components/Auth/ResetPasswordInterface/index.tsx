'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/Common/Button";
import Input from "@/Common/Input";
import ResetPassImg from "../../../../public/Svg/ResetPassImg.svg"


const ResetPasswordInterface = ({ onNext }: { onNext: () => void }) => {

    return ( 
        <div className="md:my-[127px] my-[40px] md:flex-row flex flex-col items-center xl:mx-[150px] lg:mx-[50px]  md:mr-[20px] ">
        <div className="center md:w-[53%] w-full  ">
            <Image src={ResetPassImg} alt="sign-img" />
        </div>

        <div className="max-w-[430px] w-full md:mt-[0] mt-[28px] px-[20px] ">
            <h2 className="text-[#131619] font-bold">Reset Password</h2>
            <p className="text-[#8A8A8A] text-[16px] mt-[16px] ">Enter email address linked to your account to get OTP</p>

            <div className="mt-[16px] space-y-[16px]">
               <Input 
                label="Email Address"
                placeholder="Your email"
                type="email"
              />
        </div>

          <div className="mt-[16px] ">
            <Button 
              label="Send OTP"
              MW={'100%'}
              onClick={onNext}
            />
          </div> 
        </div>
    </div>
     );
}
 
export default ResetPasswordInterface;