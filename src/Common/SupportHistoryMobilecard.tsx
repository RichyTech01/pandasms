
const cardData = [
    { label: 'Created Date', data: '12/11/2024, 3:29:25 PM', status: 'Pending' },
    { label: 'Ticket ID', data: '#rty55533',  },
    { label: 'Issue', data: 'OTP not received',  },
    { label: 'OTP', data: 'N/A',},
    { label: 'Status', status: 'Pending' },
  ];

const SupportHistoryMobilecard = () => {
    return ( 
              <div className="border border-[#E6E6E6] bg-[#F9FAFB] rounded-[12px] py-[21px] px-[16px] space-y-[12px] flex-col flex ">
                {cardData.map((item, index) => (
                  <div key={index} className="between ">
                    <p className="text-[#131619] text-[12px] ">{item.label}</p>
                    {item.label === 'Status' ? (
                      <p
                        className={`text-[12px] rounded-[16px] px-[25px] py-[10px] ${
                          item.status === 'Pending'
                            ? 'text-[#FFCC00] bg-[#FFFAE6]'
                            : item.status === 'Resolved'
                            ? 'text-[#00CC00] bg-[#E6FFE6]'
                            : 'text-[#FF0000] bg-[#FFE6E6]'
                        }`}
                      >
                        {item.status}
                      </p>
                    ) : (
                      <p className="text-[#131619] text-[12px] ">{item.data}</p>
                    )}
                  </div>
                ))}
              </div>
            );
          };
          
    
export default SupportHistoryMobilecard;