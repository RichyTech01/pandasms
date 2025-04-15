
import Input from "@/Common/Input";
import CancelIcon from "@/Common/CancelIcon";
import Button from "@/Common/Button";


type CreateNewTicketModalProps = {
    setNewTicketModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateNewTicketModal = ({setNewTicketModal}: CreateNewTicketModalProps) => {
    return (
        <div className=" fixed inset-0 flex mt-[13rem] justify-center z-50">
         <div className="w-[90%] min-h-[496px] bg-white bb md:absolute rounded-[12px] z-50 max-w-[632px] mx-auto px-[20px] pb-[56px]  ">
            <div className="absolute right-0 mr-[29px] mt-[29px]">
                <CancelIcon setIsOpen={setNewTicketModal} />
            </div>

            <h2 className="black text-[18px] font-bold text-center pt-[56px]">Create New Ticket</h2>

            <div className="space-y-[30px] mt-[30px] max-w-[431px] w-full mx-auto  ">
                <Input 
                  label="Ticket Title"
                  placeholder="Enter tittle"
                  type="text"
                />
                <div>
                    <label className="text-[#545454] text-[14px] font-normal">Message</label>
                    <textarea className="border-[0.5px] border-[#E6E6E6] rounded-[8px] w-full h-[124px] px-[10px] py-[10px] outline-[#116EFC] mt-[12px]  " placeholder="Message"></textarea>
                </div>
            </div>
            <div className="mt-[30px]  max-w-[431px] w-full mx-auto">
                <Button 
                label="Create Ticket"
                onClick={() => setNewTicketModal(false)}
                />
            </div>
            
        </div>
      </div>
     );
}
 
export default CreateNewTicketModal;
