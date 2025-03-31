

import VerificationCard from "@/Common/VerificationCard";

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
           <VerificationCard
             data={cardData1}
            />
        </div>
     );
}  
 
export default SmallerScreen;