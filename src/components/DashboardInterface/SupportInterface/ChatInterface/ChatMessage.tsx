import Image from "next/image";
import AiIcon from "../../../../../public/DashboardSvg/AiImage.svg";
import UserImg from "../../../../../public/DashboardSvg/AccountIcon.svg";

interface MessageProps {
    message: {
        sender: "support" | "user";
        text: string;
        timestamp: string;
    };
}

const ChatMessage: React.FC<MessageProps> = ({ message }) => {
    return (
        <div className={`mt-6 flex  ${message.sender === "support" ? "justify-start" : "justify-end"} items-start`}>
            {message.sender === "support" && (
                <Image src={AiIcon} alt="Support Avatar" width={40} height={40} className="w-10 h-10 rounded-full mr-[12px] self-start" />
            )}

            <div className="w-full max-w-[461px]">
                <div
                    className={`rounded-xl max-w-[461px] w-full ${
                        message.sender === "support"
                            ? "bg-[#116EFC] text-white rounded-tl-[0px] px-[17px] py-[15px]"
                            : "bg-[#F9FAFB] rounded-tr-[0px] px-[17px] py-[15px]"
                    }`}
                >
                    {message.sender === "support" && <p className="text-[14px] font-semibold text-[#609EFD] mb-[4px]">Support</p>}
                    
                    {message.sender === "user" && <p className="text-[14px] text-[#8A8A8A] text-right">{message.timestamp}</p>}

                    <p className={`${message.sender === "support" ? "font-normal text-[14px]" : "text-right font-normal text-[14px] mt-[4px] text-[#131619]"}`}>
                        {message.text}
                    </p>
                </div>

                {message.sender === "user" && <p className="text-[12px] text-[#8A8A8A] mt-[8px] text-right">Seen by support</p>}
           </div>

            {message.sender === "user" && (
                <Image src={UserImg} alt="User Avatar" width={40} height={40} className="w-10 h-10 rounded-full ml-[12px] self-start" />
            )}
        </div>
    );
};

export default ChatMessage;
