
import Table from "@/Common/Table";
const data = [
    {
      id: "1",
      createdDate: "12/11/2024 3:29:25 PM",
      service: "Telegram",
      number: "14243669161",
      otp: "206-776",
      cost: "$0.75",
      status: "Completed",
    },
    {
      id: "2",
      createdDate: "12/12/2024 2:45:10 PM",
      service: "WhatsApp",
      number: "14243669162",
      otp: "206-777",
      cost: "$1.20",
      status: "Pending",
    },
    {
      id: "3",
      createdDate: "12/13/2024 1:15:30 PM",
      service: "Slack",
      number: "14243669163",
      otp: "206-778",
      cost: "$0.90",
      status: "Cancelled",
    },
  ];

  const column = [
    {}
  ]
  const LargerScreen = () => {
    return (
      <Table 
        data={data}
        col1="Created Date"
        col2="Service"
        col3="Number"
        col4="OTP"
        col5="Cost"
        col6="Status"
       />

    );
  };
  
  export default LargerScreen;
  