

import Image from "next/image";
import Bell from "../../../../public/DashboardSvg/GetcodeBell.svg"
import QrCodeImg from "../../../../public/DashboardSvg/QrCodeIcon.svg"
import TextInputWithCopy from "@/Common/TextInputWithCopy";
import Input from "@/Common/Input";
import Button from "@/Common/Button";


type SmallerProcessingModalProps = {
    setShowModal: (showModal: boolean) => void;
}

const SmallerProcessingModal = ({setShowModal}: SmallerProcessingModalProps) => {
    return ( 
        <div className="h-screen bg-[#F9FAFB]  ">
            <div className="w-[90%] min-h-[496px] md:absolute rounded-[12px] z-50 md:mt-[120px] max-w-[700px] mx-auto px-[38px] py-[30px] bg-white">
               <div className="center ">
                 <p className="text-[14px] ">Time left: <span className="text-[#DF0000]">19:59</span></p>
              </div>

              <div>
                <div className="flex items-start bg-[#F9FAFB] rounded-[12px] py-[13px] px-[32px]  max-w-[431px] w-full mx-auto mt-[20px] ">
                    <Image src={Bell} alt="bell-icon"/>
                   <p className="text-[14px] text-[#545454] ml-[12px]">The system will automatic credit your deposit after
                  receiving 1 confirmation in the blockchain</p>
               </div>

                <div className="center flex-col mt-[20px] ">
                  <Image src={QrCodeImg} alt="qrcode-img" />
                  <p className="text-[#8A8A8A] text-[14px] my-[20px] ">Send expected $1,000.00 USDT to wallet address</p>
                </div>

                 <div className="space-y-[16px]  "> 
                    <TextInputWithCopy  
                     label="Wallet Address"
                     placeholder="0x85f5F1d1aA7DcE2FfA9D4f2fD3e6F0aAFbA4D3B7"
                     setCopied={() => {}}
                    />

                    <Input 
                      label="Expected Amount"
                      placeholder="$1,000.00"
                      type="numeric"
                    />
                </div>
            </div>
            </div>

            <div className="mx-[5%] mt-[30px]">
            <Button 
             label="Cancel Payment"
             BackColor="#DF0000"
             onClick={() => setShowModal(false)}
             />
             </div>
        </div>
     );
}
 
export default SmallerProcessingModal;