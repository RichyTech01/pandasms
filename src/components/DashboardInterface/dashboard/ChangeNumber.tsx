
import CancelIcon from "@/Common/CancelIcon";
import Button from "@/Common/Button";

type ChnageNumberProps = {
    handleNextstep: () => void
    setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>
}

const ChangeNumber = ({handleNextstep, setIsOpen}: ChnageNumberProps) => {
    return ( 
        <div className=" absolute max-w-[555px] bg-white rounded-[20px] border-[0.5px] border-[#E6E6E6] py-[34px] md:px-[38px] px-[16px] w-[90%]  md:mt-[94px] mt-[20px] ">
            <div className="absolute top-0 right-0 mt-[15px] mr-[15px]  ">
              <CancelIcon 
              setIsOpen={setIsOpen}
             />
            </div>
           
            <div className="my-[26px]  ">
                <div className="items-center flex-col flex ">
                   <p className="text-[20px] font-bold text-[#131619]  text-center flex ">+19843105553 isnt working for whatsapp?</p>
                  <p className="text-[16px] text-[#8A8A8A] mt-[8px] text-center flex">Click change number for new</p>
                </div>

                <div className="max-w-[256px] w-full mx-auto mt-[20px]  ">
                  <Button 
                    label="Change Number"
                    BackColor="white"
                    textColor="#0F64E5"
                    BorderColor="#0F64E5"
                    BW={1}
                    onClick={handleNextstep}
                  />
                </div>
              
            </div>
        </div>
     );
}
 
export default ChangeNumber;