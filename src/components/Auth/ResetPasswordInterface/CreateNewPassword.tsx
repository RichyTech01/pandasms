"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Button from "@/Common/Button";
import ResetPassImg from "../../../../public/Svg/ResetPassImg.svg";
import Input from "@/Common/Input";
import SuccesfullMessage from "@/Common/SuccesfullMessage";
import SuccesMessageMobile from "@/Common/SuccesMessageMobile";


const CreateNewPassword = () => {
  const router = useRouter()
    const [changePass, setChangePass] = useState(true)

    return ( 
         <div className="md:my-[127px] my-[40px] md:flex-row flex flex-col items-center xl:mx-[250px] lg:mx-[50px]  ">
          <div className="fixed right-0 top-0 mt-32 mr-10 hidden md:flex  ">
            {changePass &&  <SuccesfullMessage 
              tittle="password"
              description="New password created. Access your account using your new password."
              handleClose={() => setChangePass(prev => !prev)}
            />}
            </div>

            <div className="inset-0 z-50 right-0 top-0 fixed md:hidden mt-10 h-svh">
            {changePass &&  <SuccesMessageMobile 
              // tittle="password"
              // description="New password created. Access your account using your new password."
              // handleClose={() => setChangePass(prev => !prev)}
            />}
            </div>
           
            <div className="center md:w-[53%] w-full ">
                <Image src={ResetPassImg} alt="sign-img" />
            </div>

            <div className="max-w-[430px] w-full md:mt-[0] mt-[28px] md:px-[0] px-[20px]">
                <h2 className="text-[#131619] font-bold">Create New Password</h2>
                <p className="text-[#8A8A8A] text-[16px] mt-[16px] ">Set a new password to access account.</p>

                <div className="mt-[16px] space-y-[16px]">
                   <Input 
                     label="Password"
                     placeholder="Your new password"
                     type="password"
                     textSize="text-[30px] bt -pt-3"
                  />
                  <Input 
                     label="Confirm Password"
                     placeholder="Confirm new password"
                     type="password"
                     textSize="text-[30px] bt -pt-3"
                  />
            </div>

              <div className="mt-[16px]  ">
                <Button 
                  label="Change Password"
                  MW={'100%'}
                  onClick={() => {setChangePass(prev => !prev); router.push('/SignIn')}}  
                />
              </div> 
            </div>
        </div>
     );
}
 
export default CreateNewPassword;