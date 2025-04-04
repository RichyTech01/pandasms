
import Button from "@/Common/Button";
import MobileTable from "@/Common/MobileTable";

const TicketData = [
    { label: 'Created Date', data: '12/11/2024, 3:29:25 PM' },
    { label: 'Ticket ID', data: '#rty55533' },
    { label: 'Issue', data: 'OTP not received' },
    { label: 'Status', data: 'Pending' },
 ];

 type SmallerScreenTicketTableProps = {
    setshowSuccess: React.Dispatch<React.SetStateAction<boolean>>
    setShowChat:React.Dispatch<React.SetStateAction<boolean>>
 }
 
const SmallerScreenTicketTable = ({setShowChat, setshowSuccess}: SmallerScreenTicketTableProps) => {

    return ( 
        <div>
            <p className="text-[#131619] text-[18px] font-bold  ">Support Ticket</p>
              <div className=" w-full  mt-[20px] ">
                    <Button 
                     label="New Ticket"
                     onClick={() => {}}
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
               />
            </div>
        </div>
     );
}
 
export default SmallerScreenTicketTable;