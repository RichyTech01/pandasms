
import Input from "@/Common/Input";
import Button from "@/Common/Button";
import React from "react";


type SmallerNewPasswordModalProps = {
    setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenChangePasswordModal: React.Dispatch<React.SetStateAction<boolean>>
}


const SmallerNewPasswordModal = ({setOpenChangePasswordModal, setShowSuccess}: SmallerNewPasswordModalProps) => {

    return ( 
        <div className="mt-[24px] px-[20px] max-w-[400px] mx-auto py-[20px]">
            <div className="max-w-[303px] w-full ">
                <h1 className="text-[#131619] text-[16px] font-semibold text-center ">Set New Password</h1>
                <p className="ash text-[14px] text-center mt-[8px] ">Create a new password to access account</p>
            </div>

            <div className="space-y-[30px]  mt-[30px] ">
                <Input  
                  label="New Password"
                  type="text"
                /> 

                <Input  
                  label="Confirm Password"
                  type="password"
                /> 
            </div>

            <div className="mt-[30px] "> 
                <Button 
                 label="Continue"
                 onClick={() => {setOpenChangePasswordModal(prev=> !prev); setShowSuccess(prev=> !prev)}}
                />
            </div>
        </div>
     );
}
 
export default SmallerNewPasswordModal;