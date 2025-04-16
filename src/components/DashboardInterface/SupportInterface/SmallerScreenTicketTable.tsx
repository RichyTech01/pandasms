
import Button from "@/Common/Button";
import MobileTable from "@/Common/MobileTable";

 type SmallerScreenTicketTableProps = {
    setshowSuccess: React.Dispatch<React.SetStateAction<boolean>>
    setShowChat:React.Dispatch<React.SetStateAction<boolean>>
    setNewTicketModal: React.Dispatch<React.SetStateAction<boolean>>
 }
 
const SmallerScreenTicketTable = ({setShowChat, setshowSuccess, setNewTicketModal}: SmallerScreenTicketTableProps) => {

    return ( 
        <div>
            <p className="text-[#131619] text-[18px] font-bold  ">Support Ticket</p>
              <div className=" w-full  mt-[20px] ">
                    <Button 
                     label="New Ticket"
                     onClick={() => setNewTicketModal(prev => !prev)}
                     font="font-normal"
                    />
                </div>
             <div className="mt-[20px] ">
               <MobileTable   
                  label1="Created Date"
                  data1="12/11/2024, 3:29:25 PM"
                  label2="Ticket ID"
                  data2="#rty55533"
                  label3="Issue"
                  data3="OTP not received"
                  label6="Status"
                  data6="Pending"
                  onClick={() => {
                    setShowChat(prev => !prev)
                    setshowSuccess(prev => !prev)
                  }}
               />
            </div>
        </div>
     );
}
 
export default SmallerScreenTicketTable;