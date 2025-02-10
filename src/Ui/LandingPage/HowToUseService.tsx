import Image from "next/image";
import ServiceImg from "../../../public/Svg/ServiceImg.svg"
import VideoPlayer from "../../../public/Svg/VideoPLayerIcon.svg"
import HoveredVideoPlayer from "../../../public/Svg/HoveredVidPlayer.svg"

const HowToUseService = () => {
    return ( 
        <div>
        <div className="md:h-[637px] h-[515px] bg-white px-[20px] ">
            <div className="md:pt-[75.5px] mt-[20px] center flex-col ">
                <div className="max-w-[487px] w-full ">
                    <p className="font-bold text-[24px] leading-[30.24px] text-[#131619] text-center ">How to use the service?</p>
                    <p className="mt-[12px] leading-[20.16px] text-[16px] text-[#8A8A8A] text-center">Watch the video guide and you&apos;ll understand
                    everything for yourself</p>
                </div>

                <div className="relative bg-[#0043AA] h-[384px] max-w-[700px] w-full rounded-[16px] mt-[20px] overflow-hidden cursor-pointer ">
                    <Image 
                        src={ServiceImg} 
                        alt="desktopImage" 
                        className="w-full h-full object-cover"
                    />
                     <div className="absolute inset-0 bg-[#0043AA]/90 backdrop-blur-sm center group">
                       <Image src={VideoPlayer} alt="videoPlayerIcon" className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"/>
                      <Image src={HoveredVideoPlayer} alt="HoveredVideoPlayer" className="absolute to transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                     </div>
               </div>
            </div>
        </div>
        </div>
     );
}
 
export default HowToUseService;