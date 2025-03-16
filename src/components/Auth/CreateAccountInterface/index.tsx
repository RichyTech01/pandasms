'use client'

import { useRouter } from "next/navigation";
import Button from "@/Common/Button";
import Image from "next/image";
import Input from "@/Common/Input";
import SignInImg from "../../../../public/Svg/CreateAccountSvg.svg"


const CreateAccount = () => {

    const router = useRouter()
    
    return ( 
        <div className="md:my-[127px] my-[40px] md:flex-row flex flex-col items-center xl:mx-[150px] lg:mx-[50px]  md:mr-[20px] ">
            <div className="center md:w-[65%] w-full  ">
                <Image src={SignInImg} alt="sign-img" />
            </div>

            <div className="max-w-[430px] w-full md:mt-[0] mt-[28px]  px-[20px] ">
                <h2 className="text-[#131619] font-bold">Create Account</h2>
                <p className="text-[#8A8A8A] text-[16px] mt-[16px] ">Enter email and password to get started</p>

                <div className="mt-[16px] space-y-[16px]">
                   <Input 
                   label="Email Address"
                    placeholder="Your email"
                    type="email"
                  />
                    <Input 
                     label="Password"
                    placeholder="Enter password"
                    type="password"
                  />
                   <Input 
                     label="Confirm password"
                    placeholder="Enter password"
                    type="password"
                  />
            </div>

              <div className="mt-[16px] ">
                <Button 
                  label="Create Account"
                  MW={'100%'}

                />
              </div> 
              
              <p className="text-[14px] text-[#131619] mt-[40px] text-center  ">Already have account?<span className="text-[14px] text-[#0F64E5] cursor-pointer  " onClick={() => router.push('/SignIn')}> Login</span></p>
            </div>
        </div>
     );
}
 
export default CreateAccount;