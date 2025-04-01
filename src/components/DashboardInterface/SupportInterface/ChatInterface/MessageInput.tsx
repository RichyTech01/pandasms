import Image from "next/image";
import SendIcon from "../../../../../public/DashboardSvg/SendIcon.svg";

interface MessageInputProps {
    newMessage: string;
    setNewMessage: (message: string) => void;
    handleSendMessage: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ newMessage, setNewMessage, handleSendMessage }) => {
    return (
        <div className="pt-4 bg-white sticky bottom-0 p-4">
            <div className="relative flex items-center h-[80px] w-full">
                <input
                    type="text"
                    placeholder="Message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 border rounded-xl px-[34px] h-full pr-[50px] outline-[#116EFC]"
                />
                <button onClick={handleSendMessage} className="absolute right-[15px] flex items-center justify-center">
                    <Image src={SendIcon} alt="send-icon" />
                </button>
            </div>
        </div>
    );
};

export default MessageInput;
