import React from "react";

type LargerCompProps ={
  setShowChat:  React.Dispatch<React.SetStateAction<boolean>>
  setshowSuccess:  React.Dispatch<React.SetStateAction<boolean>>
}

const LargerScreenSupport = ({setShowChat, setshowSuccess}: LargerCompProps) => {
  const tickets = [
    {
      date: "04/03/2025 9:15:10 AM",
      id: "#rty55533",
      title: "OTP not received",
      status: "Processing",
    },
    {
      date: "04/03/2025 9:15:10 AM",
      id: "#rty55533",
      title: "OTP not received",
      status: "Resolved",
    },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Processing":
        return "bg-[#FFFAE6] text-[#FFCC00]";
      case "Resolved":
        return "bg-[#EDF8EC] text-[#4BB543]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="mt-[50px]">
      <div className="fc text-[#131619] text-sm mb-[30px] px-[16px] h-[40px]">
        <div className="w-[22%]">Created Date</div>
        <div className="w-[22%]">Ticket ID</div>
        <div className="w-[46%]">Ticket Title</div>
        <div className="w-[10%]">Status</div>
      </div>
      {tickets.map((ticket, index) => {
        const [date, time, period] = ticket.date.split(" ");
        return (
          <div
            key={index}
            className="fc px-[20px] h-auto min-h-[60px] bg-[#F9FAFB]  cursor-pointer mb-[16px] border-[0.5px] border-[#E6E6E6] rounded-[20px]"  onClick={()=> {setshowSuccess(false); setShowChat(prev => !prev) }}>
            <div className="text-[#131619]  text-sm w-[22%] flex flex-col pr-1 ">
              <span>{date}</span>
              <span>
                {time} {period}
              </span>
            </div>
            <div className="text-[#131619] text-sm w-[22%] px-1">{ticket.id}</div>
            <div className="text-[#131619] text-sm w-[46%] px-1">{ticket.title}</div>
            <div className="px-1 ">
              <span
                className={`px-[22px] py-[10px] rounded-[16px] text-[12px]  ${getStatusClass(ticket.status)}`}
              >
                {ticket.status}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LargerScreenSupport;
