import Image from "next/image";
import ArrowBack from "../../../../../public/DashboardSvg/ArrowBack.svg";
import ResolvedIcon from "../../../../../public/DashboardSvg/ResolvedIcon.svg";
import AiIcon from "../../../../../public/DashboardSvg/AiImage.svg";
import UserImg from "../../../../../public/DashboardSvg/AccountIcon.svg";
import SendIcon from "../../../../../public/DashboardSvg/SendIcon.svg";
import React, { useState } from "react";




const SupportChat = () => {
    const [messages, setMessages] = useState([
        {
            sender: "support",
            text: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            timestamp: "04/03/2025, 9:15:10 AM",
        },
        {
            sender: "user",
            text: "This is a user message.",
            timestamp: "04/03/2025, 9:16:00 AM",
        },
    ]);

    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([
                ...messages,
                {
                    sender: "user",
                    text: newMessage,
                    timestamp: new Date().toLocaleString(),
                },
            ]);
            setNewMessage("");
        }
    };

    return (
        <div className="md:w-full mx-auto md:border-[0.5px] border-[#E6E6E6] lg:px-[48px] mt-[100px] px-[20px] md:rounded-[20px] relative flex flex-col max-h-[700px] py-[51px]">
            <div className="flex justify-between items-center  bg-white sticky top-0">
                <div className="flex items-center cursor-pointer">
                    <Image src={ArrowBack} alt="Arrow-back" />
                    <p className="text-[14px] text-[#131619] ml-[12px]">Go back</p>
                </div>
                <div className="flex items-center cursor-pointer">
                    <Image src={ResolvedIcon} alt="resolved-icon" />
                    <p className="ml-[8px] text-[14px] text-[#131619]">Mark as Resolved</p>
                </div>
            </div>

            {/* Messages (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-2 scroll-container">
    {messages.map((message, index) => (
        <div
            key={index}
            className={`mb-4 flex ${message.sender === "support" ? "justify-start" : "justify-end"} items-start`}
        >
            {/* Show Avatar for Support Messages (Left) */}
            {message.sender === "support" && (
                <Image
                    src={AiIcon}
                    alt="Support Avatar"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-2 self-start"
                />
            )}

            {/* Message Bubble */}
            <div
                className={`rounded-xl p-3 max-w-xs ${
                    message.sender === "support" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
            >
                <p>{message.text}</p>
                <p className="text-xs text-gray-500 text-right mt-1">{message.timestamp}</p>
            </div>

            {/* Show Avatar for User Messages (Right) */}
            {message.sender === "user" && (
                <Image
                    src={UserImg}
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full ml-2 self-start"
                />
            )}
        </div>
    ))}
</div>




            <div className="pt-4 bg-white sticky bottom-0 p-4">
    <div className="relative flex items-center h-[80px] w-full">
        <input
            type="text"
            placeholder="Message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border rounded-xl px-4 h-full pr-[50px]" // Added right padding for button space
        />
        <button 
            onClick={handleSendMessage} 
            className="absolute right-[15px] flex items-center justify-center"
        >
            <Image src={SendIcon} alt="send-icon" className="" />
        </button>
    </div>
</div>

        </div>
    );
};

export default SupportChat;
