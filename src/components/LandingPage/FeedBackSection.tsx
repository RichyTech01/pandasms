import Image from "next/image";
import FeedbackUserSvg from "../../../public/Svg/FeedBackUser.svg"
import Feedbackstar from "../../../public/Svg/FeedbackStar.svg"


const FeedBackData = [
    {name:'John Doe', description:'I tested many sms from them for many services everything was ok. Otp come after fe seconds.'}, 
    {name:'Michael Brown', description:'Prompt delivery of verification codes every time. Received instant OTPs without any delays. Great experience using their SMS service.'}, 
    {name:'Emily Johnson', description:'The service provided swift delivery of verification codes. I received OTPs promptly without any issues. Highly recommended for SMS services.'}, 
    {name:'Emily Johnson', description:'The service provided swift delivery of verification codes. I received OTPs promptly without any issues. Highly recommended for SMS services.'}, 
    
]


const FeedBackSection = () => {
    return ( 
        <div className="md:py-[40px] pt-[29px] md:h-[453px] h-[396px]  ">
            <div className="center flex-col ">
                <p className="text-[#131619] font-bold md:text-[24px] text-[18px] md:leading-[30.59px] leading-[22.68px] font-Geint text-center">Feedback from regular customers</p>
                <p className="text-[#8A8A8A] md:text-[16px] text-[14px] md:leading-[20.16px] leading-[17.64px] mt-[4px] ">Our verified users testimony</p>
            </div>

            <div className="flex items-center gap-[20px] overflow-x-auto scroll-smooth scroll-container w-full px-[20px]">
                {FeedBackData.map((data, index) => (
                    <div key={index} className="flex-shrink-0">
                        <div className="h-[263px] rounded-[16px] md:w-[434px] w-[335px] bg-[#F9FAFB] px-[33px] pt-[34px] md:mt-[40px] mt-[30px] cursor-move hover:border-[#116EFC] border">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Image src={FeedbackUserSvg} alt="user" />
                                    <div className="ml-[12px]">
                                        <p className="text-[14px] leading-[17.6px] text-[#131619]">{data.name}</p>
                                        <p className="text-[12px] leading-[15.12px] text-[#8A8A8A]">Verified User</p>
                                    </div>
                                </div>
                                <Image src={Feedbackstar} alt="feedback star" />
                            </div>
                            <p className="text-[14px] text-[#131619] leading-[17.64px] mt-[30px]">
                                {data.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default FeedBackSection;