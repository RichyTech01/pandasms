
"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@/Common/Button";
import ResetPassImg from "../../../../public/Svg/ResetPassImg.svg";
import Input from "@/Common/Input";
import SuccesfullMessage from "@/Common/SuccesfullMessage";

const CreateNewPassword = () => {

    const [changePass, setChangePass] = useState(false)

    return ( 
         <div className="md:my-[127px] my-[40px] md:flex-row flex flex-col items-center xl:mx-[250px] lg:mx-[50px]  ">
          {/* <div></div> */}
            {changePass &&  <SuccesfullMessage 
              tittle="password"
              description="New password created. Access your account using your new password."
              handleClose={() => setChangePass(prev => !prev)}
            />}
           
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
                  onClick={() => setChangePass(prev => !prev)}
                />
              </div> 
              
             
            </div>
        </div>
     );
}
 
export default CreateNewPassword;