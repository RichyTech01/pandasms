
import MobileTable from "@/Common/MobileTable";

const HistoryMobileView = () => {
    return ( 
        <div className="w-full  mt-[20px] ">
            <MobileTable
              label1="Created Date" 
              data1="12/11/2024, 3:29:25 PM"
              label2="Method"
              data2="Crypto"
              label3="Type"
              data3="USDT"
              label4="OTP"
              data4="N/A"
              label5="Amount"
              data5="$200.00"
              label6="Status"
              data6="Completed"
              onClick={() => {}}
            />

        </div>
     );
}
 
export default HistoryMobileView;