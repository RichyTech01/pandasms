'use client'
import { useState } from "react";
import AuthNavBar from "@/components/Auth/AuthNavBar";
import Footer from "@/components/Footer";
import ResetPasswordInterface from "@/components/Auth/ResetPasswordInterface";
import EnterOTP from "@/components/Auth/ResetPasswordInterface/EnterOTP";
import CreateNewPassword from "@/components/Auth/ResetPasswordInterface/CreateNewPassword";

const ResetPassword = () => {
    const [step, setStep] = useState(1);  

    return ( 
        <div className="flex flex-col min-h-screen">
        <AuthNavBar />

        <div className="flex-grow">
              {step === 1 && <ResetPasswordInterface onNext={() => setStep(2)} />}
                {step === 2 && <EnterOTP onNext={() => setStep(3)} />}
                {step === 3 && <CreateNewPassword />} 
        </div>

        <Footer />
    </div>
     );
}
 
export default ResetPassword;