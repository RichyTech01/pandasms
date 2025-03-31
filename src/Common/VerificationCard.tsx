interface CardItem {
  label: string;
  data?: string;
  status?: 'Pending' | 'Success' | 'Resolved' | 'Failed'; 
}

interface VerificationCardProps {
  data: CardItem[];
}

const VerificationCard: React.FC<VerificationCardProps> = ({ data }) => {
  return (
    <div className="border border-[#E6E6E6] bg-[#F9FAFB] rounded-[12px] py-[21px] px-[16px] space-y-[12px] flex-col flex ">
      {data.map((item, index) => (
        <div key={index} className="between ">
          <p className="text-[#131619] text-[12px] ">{item.label}</p>
          {item.label === 'Status' ? (
            <p
              className={`text-[12px] rounded-[16px] px-[25px] py-[10px] ${
                item.data === 'Pending'
                  ? 'text-[#FFCC00] bg-[#FFFAE6]'
                  : item.status === 'Success' || item.status === 'Resolved'
                  ? 'text-[#00CC00] bg-[#E6FFE6]'
                  : 'text-[#FF0000] bg-[#FFE6E6]'
              }`}
            >
              {item.data}
            </p>
          ) : (
            <p className="text-[#131619] text-[12px] ">{item.data || 'N/A'}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerificationCard;
