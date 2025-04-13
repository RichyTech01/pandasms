
import Button from "@/Common/Button";
import Input from "@/Common/Input";


const ChangePasswordModal = ({handleNextPage} : {handleNextPage: () => void}) => {
    return ( 
        <div className="mt-[24px] px-[20px] max-w-[400px] mx-auto py-[20px] ">
        <div className="max-w-[300px] w-full mx-auto">
            <h1 className="text-[#131619] text-[16px] font-semibold text-center ">Set New Password</h1>
            <p className="ash text-[14px] text-center mt-[8px] ">Create a new password to access account</p>
        </div>

        <div className="space-y-[30px]  mt-[30px] ">
            <Input  
              label="Current Password"
              type="password"
            /> 
        </div>

        <div className="mt-[30px] "> 
            <Button 
             label="Continue"
             onClick={handleNextPage}
            />
        </div>
    </div>
     );
}
 
export default ChangePasswordModal;