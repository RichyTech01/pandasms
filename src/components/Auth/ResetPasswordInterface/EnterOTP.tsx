"use client";

import Image from "next/image";
import Button from "@/Common/Button";
import ResetPassImg from "../../../../public/Svg/ResetPassImg.svg";
import OTPInput from "@/Common/OTPInput";
import { useState } from "react";

const EnterOTP = ({onNext} : {onNext: () => void }) => {
    const [otp, setOtp] = useState("");  // Store OTP state

    // Check if OTP is complete (6 digits)
    const isOtpComplete = otp.length === 6;

    return (
        <div className="md:my-[127px] my-[40px] md:flex-row flex flex-col items-center xl:mx-[250px] lg:mx-[50px]  ">
            <div className="center md:w-[53%] w-full ">
                <Image src={ResetPassImg} alt="sign-img" />
            </div>

            <div className="max-w-[430px] w-full md:mt-[0] mt-[28px] md:px-[0] px-[20px]">
                <h2 className="text-[#131619] font-bold">Reset Password</h2>
                <p className="text-[#8A8A8A] text-[16px] mt-[16px]">Enter the 6-digit OTP sent to you via email</p>

                <div className="mt-[16px] ">
                    <OTPInput onComplete={setOtp} label="Enter OTP" />
                </div>

                <div className="mt-[16px]">
                    <Button 
                        label="Continue"
                        MW={'100%'}
                        BackColor={isOtpComplete ? "#116EFC" : "#E6E6E6"}
                        textColor={isOtpComplete ? "white" : "#8A8A8A"}
                        disabled={!isOtpComplete}
                        onClick={onNext}
                    />
                </div> 

                <p className="bt text-[14px] font-semibold text-center  mt-[32px] cursor-pointer ">Resend OTP</p>
            </div>
        </div>
    );
}

export default EnterOTP;
