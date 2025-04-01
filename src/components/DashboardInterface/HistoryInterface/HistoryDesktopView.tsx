import Table from "@/Common/Table";

const data = [
  {
    id: "1",
    createdDate: "12/11/2024 3:29:25 PM",
    Method: "Crypto",
    Type: "USDT",
    OrderID: "$0.75",
    Amount: "$0.75",
    status: "Completed",
  },
];

const HistoryDesktopView = () => {
    return ( 
        <div className="w-full ">
          <Table
             col1="Created Date"
             col2="Order ID"
             col3="Method"
             col4="Type"
             col5="Amount"
             col6="Status"
             data={data}
           />
        </div>
     );
}
 
export default HistoryDesktopView;