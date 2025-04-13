

type MobileTableProps = {
    label1?: string
    label2?: string
    label3?: string
    label4?: string 
    label5?: string
    label6?: string
    data1?: string
    data2?: string
    data3?: string
    data4?: string
    data5?: string
    data6?: string
    onClick: () => void
}

const MobileTable = ({ label1, label2, label3, label4, label5, label6, data1, data2, data3, data4, data5, data6, onClick }: MobileTableProps) => {
    return (
        <div className="border border-[#E6E6E6] bg-[#F9FAFB] rounded-[12px] py-[21px] px-[16px] space-y-[12px] w-full " onClick={onClick}>
            {label1 && data1 && (
                <div className="between">
                    <p className="text-[12px] black">{label1}</p>
                    <p className="text-[12px] black">{data1}</p>
                </div>
            )}
            {label2 && data2 && (
                <div className="between">
                    <p className="text-[12px] black">{label2}</p>
                    <p className="text-[12px] black">{data2}</p>
                </div>
            )}
            {label3 && data3 && (
                <div className="between">
                    <p className="text-[12px] black">{label3}</p>
                    <p className="text-[12px] black">{data3}</p>
                </div>
            )}
            {label4 && data4 && (
                <div className="between">
                    <p className="text-[12px] black">{label4}</p>
                  
                    <p className="text-[12px] black">{data4}</p>
                </div>
            )}
            {label5 && data5 && (
                <div className="between">
                    <p className="text-[12px] black">{label5}</p>
                    <p className="text-[12px] black">{data5}</p>
                </div>
            )}
            {label6 && data6 && (
                <div className="between">
                    <p className="text-[12px] black">{label6}</p>
                    <div className={` ${data6 === "Pending" ? "text-[#FFCC00] bg-[#FFFAE6]" : data6 === "Resolved" || data6 === "Completed" ? "text-[#00CC00] bg-[#E6FFE6]" : "text-[#FF0000] bg-[#FFE6E6]"} bg-[#EDF8EC] rounded-[16px] px-[16px] py-[10px]`}>
                        <p className="text-[12px]">{data6}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

 
export default MobileTable;
