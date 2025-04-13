
import CancelIcon from "@/Common/CancelIcon";
import Input from "@/Common/Input";
import Button from "@/Common/Button";

type ChangePasswordModalProps = {
  handleNextPgae: () => void
    setOpenChangePasswordModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ChangePasswordModal = ({setOpenChangePasswordModal, handleNextPgae}: ChangePasswordModalProps) => {
    return ( 
        <div className="w-[90%] min-h-[496px] bg-white bb absolute rounded-[12px] z-50 mt-[230px] max-w-[700px] mx-aut px-[20px] py-[20px] mx-[20px] ">
            <div className="absolute right-0 mr-3  cursor-pointer ">
              <CancelIcon setIsOpen={setOpenChangePasswordModal}/>
            </div>
            <div className="mt-[67px]">
               <h2 className="text-[18px] font-bold text-center text-[#131619]  ">Change Password</h2>
               <p className="text-[#8A8A8A] text-[14px] mt-[8px] text-center ">Enter your current password to verify ownership</p>

               <div className="max-w-[431px] mx-auto mt-[30px] space-y-[30px]">
                 <Input 
                  type="password" 
                  label="Current Password"
                  placeholder="Enter password"
                 />

               <Button
                label="Continue"
                onClick={handleNextPgae}
               />
               </div>
            </div>
        </div>
     );
}