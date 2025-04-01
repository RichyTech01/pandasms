


const statusClasses: Record<string, string> = {
Completed: "bg-[#EDF8EC] text-[#4BB543]",
Pending: "bg-[#FFFAE6] text-[#FFCC00]",
Cancelled: "bg-[#FCE6E6] text-[#DF0000]",
};
  
type Data = {
    createdDate: string
    service?: string
    number?: string
    otp?: string
    cost?: string
    id:string
    OrderID?: string
    Method?: string
    Type?: string
    Amount?: string
    status: string
}

type TableProps = {
    data: Data[]
    col1: string
    col2: string
    col3: string
    col4: string
    col5: string 
    col6: string 
} 

const Table = ({data, col1, col2, col3, col4, col5, col6}: TableProps) => {
    return ( 
        <div className="lg:w-[92%] w-[100%]  ">
        {/* Header */}
        <div className="flex items-center text-[#131619] text-sm h-[40px] mb-[14px] px-[16px]">
        <span className="w-[18%]">{col1}</span>
          <span className="w-[18%]">{col2}</span>
          <span className="w-[18%]">{col3}</span>
          <span className="w-[18%]">{col4}</span>
          <span className="w-[18%]">{col5}</span>
          <span className="w-[10%]">{col6}</span>
        </div>
  
        {/* Data Rows */}
        {data.map((item) => {
          const [date, time, period] = item.createdDate.split(" ");
  
          return (
            <div
              key={item.id}
              className="flex bg-[#F9FAFB] h-[60px] rounded-[20px] border border-[#E6E6E6] items-center mt-[16px] px-[16px]  "
            >
              {/* Date on Top, Time Below */}
              <div className="flex flex-col text-[#131619] text-start text-[14px] w-[18%] ">
                <span className="">{date}</span>
                <span className="text-sm ">
                  {time} {period}
                </span>
              </div>
  
              <span className="w-[18%]">{item.service || item.OrderID }</span>
              <span className="w-[18%]">{item.number || item.Method }</span>
              <span className="w-[18%]">{item.otp || item.Type }</span>
              <span className="w-[18%] ">{item.cost || item.Amount }</span>
  
              <span
                className={`px-3 max- w-[97px]  py-1 rounded-full text-sm  font-medium ${statusClasses[item.status]} mr-[10px] lg:mr-[20px] w-[10%]  `}
              >
                {item.status}
              </span>
            </div>
          );
        })}
      </div>
     );
}
 
export default Table;