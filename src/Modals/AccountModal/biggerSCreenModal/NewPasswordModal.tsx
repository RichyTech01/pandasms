
import Button from "@/Common/Button";
import CancelIcon from "@/Common/CancelIcon";
import Input from "@/Common/Input";


  type NewPasswordModalProps = {
    setOpenChangePasswordModal: React.Dispatch<React.SetStateAction<boolean>>
    setShowSuccess:  React.Dispatch<React.SetStateAction<boolean>>
  }

const NewPasswordModal = ({setOpenChangePasswordModal, setShowSuccess}: NewPasswordModalProps ) => {
    return ( 
        <div className="w-[90%] min-h-[496px]  bg-white bb absolute rounded-[12px] z-50 mt-[230px] max-w-[700px] mx-aut px-[20px] py-[20px] mx-[20px] ">
        <div className="absolute right-0 mr-3  cursor-pointer ">
          <CancelIcon setIsOpen={setOpenChangePasswordModal}/>
        </div>
        <div className="mt-[31px]">
           <h2 className="text-[18px] font-bold text-center text-[#131619]  ">Set New Password</h2>
           <p className="text-[#8A8A8A] text-[14px] mt-[8px] text-center ">Create a new password to access account</p>

           <div className="max-w-[431px] mx-auto mt-[30px] space-y-[30px]">
             <Input 
              type="password" 
              label="New Password"
              placeholder="Enter password"
             />

           <Input 
              type="password" 
              label="Confirm Password"
              placeholder="Confirm password"
             />

           <Button 
            label="Continue"
            onClick={() => {setOpenChangePasswordModal(false); setShowSuccess(prev=> !prev)}}
           />
           </div>
        </div>
    </div>
     );
}
 
export default NewPasswordModal;