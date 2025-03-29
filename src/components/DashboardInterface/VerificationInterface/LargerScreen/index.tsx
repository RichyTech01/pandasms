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
  
  const statusClasses: Record<string, string> = {
    Completed: "bg-[#EDF8EC] text-[#4BB543]",
    Pending: "bg-[#FFFAE6] text-[#FFCC00]",
    Cancelled: "bg-[#FCE6E6] text-[#DF0000]",
  };
  
  const LargerScreen = () => {
    return (
      <div className="lg:w-[92%] w-[100%]  ">
        {/* Header */}
        <div className="flex items-center text-[#131619] text-sm h-[40px] mb-[14px] px-[16px]">
        <span className="w-[18%]">Created Date</span>
          <span className="w-[18%]">Service</span>
          <span className="w-[18%]">Number</span>
          <span className="w-[18%]">OTP</span>
          <span className="w-[18%]">Cost</span>
          <span className="w-[10%]">Status</span>
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
  
              <span className="w-[18%]">{item.service}</span>
              <span className="w-[18%]">{item.number}</span>
              <span className="w-[18%]">{item.otp}</span>
              <span className="w-[18%] ">{item.cost}</span>
  
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
  };
  
  export default LargerScreen;
  