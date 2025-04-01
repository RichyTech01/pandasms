'use client'
import { useState } from "react";
import Image from "next/image";
import ArrowBack from "../../../../../public/DashboardSvg/ArrowBack.svg";
import ResolvedIcon from "../../../../../public/DashboardSvg/ResolvedIcon.svg";
import ChatMessage from "@/components/DashboardInterface/SupportInterface/ChatInterface/ChatMessage";
import MessageInput from "@/components/DashboardInterface/SupportInterface/ChatInterface/MessageInput";


interface Message {
    sender: "support" | "user";
    text: string;
    timestamp: string;
}
type SupportChetProps = {
    setShowChat: React.Dispatch<React.SetStateAction<boolean>>
    setshowSuccess:React.Dispatch<React.SetStateAction<boolean>>
}

const SupportChat= ({setShowChat, setshowSuccess}: SupportChetProps) => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: "support", text: "Lorem ipsum lorem ipsum.", timestamp: "04/03/2025, 9:15:10 AM" },
        { sender: "user", text: "This is a user message.", timestamp: "04/03/2025, 9:16:00 AM" },
    ]);

    const [newMessage, setNewMessage] = useState<string>("");

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { sender: "user", text: newMessage, timestamp: new Date().toLocaleString() }]);
            setNewMessage("");
        }
    };

    return (
        <div className="md:w-full mx-auto md:border-[0.5px] border-[#E6E6E6] lg:px-[48px] mt-[100px] px-[20px] md:rounded-[20px] relative flex flex-col max-h-[700px] min-h-[700px] md:py-[51px] py-[20px] ">
            {/* Header */}
            <div className="flex justify-between items-center bg-white sticky top-0">
                <div className=" items-center cursor-pointer hidden md:flex " onClick={() => setShowChat(prev => !prev)}>
                    <Image src={ArrowBack} alt="Arrow-back" />
                    <p className="text-[14px] text-[#131619] ml-[12px]">Go back</p>
                </div>
                <div className="flex items-center cursor-pointer" onClick={() => {setshowSuccess(prev => !prev); setShowChat(prev => !prev)}} >
                    <Image src={ResolvedIcon} alt="resolved-icon" />
                    <p className="ml-[8px] text-[14px] text-[#131619]">Mark as Resolved</p>
                </div>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto px-2 scroll-container my-3">
                {messages.map((message, index) => (
                    <ChatMessage key={index} message={message} />
                ))}
            </div>

            {/* Message Input */}
            <MessageInput newMessage={newMessage} setNewMessage={setNewMessage} handleSendMessage={handleSendMessage} />
        </div>
    );
};

export default SupportChat;
