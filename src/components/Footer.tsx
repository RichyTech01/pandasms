
import Image from "next/image";
import WhiteLogo from "../../public/Svg/WhiteLogo.svg"
import FacebookIcon from "../../public/Svg/FaceBookIcon.svg"
import InstagramIcon from "../../public/Svg/InstagramIcon.svg"
import XIcon from "../../public/Svg/XIcon.svg"
import LinkedInIcon from "../../public/Svg/LinkedInIcon.svg"

const Footer = () => {
    return ( 
        <div className="bg-[#131619] md:h-[325px] h-[583px] md:pt-[75px] py-[54px] px-[20px] md:px-[0px]">
            <div className="md:flex items-start justify-between hidden ">
            <div className="xl:ml-[150px] ml-[20px] max-w-[461px] w-full space-y-[30px]">
                <div className="flex items-center ">
                    <Image src={WhiteLogo} alt="whiteLogo"/>
                    <p className="text-[24.84px] font-bold leading-[31.7px] font-Geint ml-[8.97px] text-white ">PandaSMS</p>
                </div>
                <p className="text-[14px] text-[#8A8A8A] leading-[17.64px]">PandaSMS Based On Real Phones, A Service For Fast And Convenient Verification On Any Sites, All Numbers Of US Countries.</p>

                <p className="text-[16px] leading-[20.16px] text-[#8A8A8A]">© 2025 PandaSMS All rights reserved.</p>
            </div>

            <div className="flex items-start xl:mr-[150px] md:mr-[20px] ">
                <div className=" flex-col items-start flex ">
                   <p className="text-[16px] leading-[20.16px] text-white px-[20px] ">Quick Links</p>
                    <div className="h-[166px] flex-col flex justify-between mt-[8px]">
                        <a href="" className="text-[#545454]  text-[14px] leading-[17.64px] px-[20px] py-[6px] hover:text-[#116EFC]  ">Contact us</a>
                        <a href="" className="text-[#545454] text-[14px] leading-[17.64px] px-[20px] py-[6px] hover:text-[#116EFC]  ">FAQs</a>
                        <a href="" className="text-[#545454] text-[14px] leading-[17.64px] px-[20px] py-[6px] hover:text-[#116EFC]  ">Create Account</a>
                        <a href="" className="text-[#545454] text-[14px] leading-[17.64px] px-[20px] py-[6px] hover:text-[#116EFC]  ">Sign in</a>
                        <a href="" className="text-[#545454] text-[14px] leading-[17.64px] px-[20px] py-[6px] hover:text-[#116EFC] ">Join Community</a>
                    </div>
                </div>

                <div className="md:flex items-center w-[176px] justify-between ml-[60px] hidden "> 
                    <Image src={FacebookIcon} alt="facebook" className="cursor-pointer"/>
                    <Image src={InstagramIcon} alt="Instagram" className="cursor-pointer"/>
                    <Image src={XIcon} alt="x" className="cursor-pointer"/>
                    <Image src={LinkedInIcon} alt="LinkedIn" className="cursor-pointer"/>
                </div>
            </div>
            </div>


         {/* Mobile View  */}

            <div className="flex flex-col items-start justify-between md:hidden">
            <div className="flex-col items-start flex ">
                   <p className="text-[16px] leading-[20.16px] text-white ">Quick Links</p>
                    <div className="h-[166px] flex-col flex justify-between mt-[8px]">
                        <a href="" className="text-[#545454] text-[14px] leading-[17.64px]  py-[6px] hover:text-[#116EFC]  ">Contact us</a>
                        <a href="" className="text-[#545454] text-[14px] leading-[17.64px]  py-[6px] hover:text-[#116EFC]  ">FAQs</a>
                        <a href="" className="text-[#545454] text-[14px] leading-[17.64px]  py-[6px] hover:text-[#116EFC]  ">Create Account</a>
                        <a href="" className="text-[#545454] text-[14px] leading-[17.64px]  py-[6px] hover:text-[#116EFC]  ">Sign in</a>
                        <a href="" className="text-[#545454] text-[14px] leading-[17.64px]  py-[6px] hover:text-[#116EFC] ">Join Community</a>
                    </div>
                </div>
            </div>

            <div className="items-cente mt-[50px] md:hidden">
            <div className="mx-[20px max-w-[461px] w-full space-y-[30px]">
                <div className="flex items-center ">
                    <Image src={WhiteLogo} alt="whiteLogo"/>
                    <p className="text-[24.84px] font-bold leading-[31.7px] font-Geint ml-[8.97px] text-white ">PandaSMS</p>
                </div>
                <p className="text-[14px] text-[#8A8A8A] leading-[17.64px]">PandaSMS Based On Real Phones, A Service For Fast And Convenient Verification On Any Sites, All Numbers Of US Countries.</p>

                <p className="text-[16px] leading-[20.16px] text-[#8A8A8A]">© 2025 PandaSMS All rights reserved.</p>
            </div>
            
            <div className="flex items-center w-[176px] justify-between mt-[30px] "> 
                    <Image src={FacebookIcon} alt="facebook" className="cursor-pointer"/>
                    <Image src={InstagramIcon} alt="Instagram" className="cursor-pointer"/>
                    <Image src={XIcon} alt="x" className="cursor-pointer"/>
                    <Image src={LinkedInIcon} alt="LinkedIn" className="cursor-pointer"/>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;