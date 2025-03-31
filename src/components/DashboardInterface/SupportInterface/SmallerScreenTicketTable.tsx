
import VerificationCard from "@/Common/VerificationCard";
import Button from "@/Common/Button";

const TicketData = [
    { label: 'Created Date', data: '12/11/2024, 3:29:25 PM' },
    { label: 'Ticket ID', data: '#rty55533' },
    { label: 'Issue', data: 'OTP not received' },
    { label: 'Status', data: 'Pending' },
 ];

 
const SmallerScreenTicketTable = () => {
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
               <VerificationCard 
                  data={TicketData}
                />
            </div>
        </div>
     );
}
 
export default SmallerScreenTicketTable;