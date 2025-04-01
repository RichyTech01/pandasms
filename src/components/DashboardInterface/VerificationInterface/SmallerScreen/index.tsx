

import MobileTable from "@/Common/MobileTable";

const cardData1 = [
   { label: 'Created Date', data: '12/11/2024, 3:29:25 PM' },
   { label: 'Service', data: 'Snapchat' },
   { label: 'Number', data: '9876543210' },
   { label: 'OTP', data: 'N/A' },
   { label: 'Cost', data: '$0.00' },
   { label: 'Status', data: 'Pending', }, 
];


const SmallerScreen = () => {

    return ( 
        <div>
           <MobileTable 
            label1="Created Date"
            data1="12/11/2024, 3:29:25 PM"
            label2="Service"
            data2="Snapchat"
            label3="Number"
            data3="9876543210"
            label4="OTP"
            data4="N/A"
            label5="Cost"
            data5="$0.00"
            label6="Status"
            data6="Pending"
           />
        </div>
     );
}  
 
export default SmallerScreen;