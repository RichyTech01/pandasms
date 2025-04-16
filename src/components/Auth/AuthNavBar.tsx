'use client'

import { useRouter } from "next/navigation";
import Button from "@/Common/Button";
import Image from "next/image";
import Logo from "../../../public/Svg/Logo.svg";
// import Hamburger from "../../../public/Svg/Hamburger.svg"

const AuthNavBar = () => {

    const router = useRouter();

    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 


    return (
        <nav className="md:h-[120px] h-[100px] border-b-[0.5px] border-b-[#E6E6E6] flex items-center justify-between relative  ">
            {/* Logo Section */}
            <div className="md:mx-[20px] md:LandingResp mx-auto xl:ml-[150px] lg:ml-[80px]  cursor-pointer" onClick={() => router.push('/')}>
                <h1 className="text-[#0F64E5] font-Geint leading-[31.7px] font-bold md:text-[31.7px] flex items-center text-[19.97px]  ">
                    <Image src={Logo} alt="logo" className="mr-[8.97px]  " priority />
                    PandaSMS
                </h1>
            </div>

            {/* Desktop Navigation Links (Hidden on Mobile) */}
            <div className="w-[262px] items-center justify-around hidden md:flex  ">
                <ol className="text-[#545454] text-[14px] hover:text-[#116EFC]">
                    <a href="" className="py-[6px] px-[20px]">Home</a>
                </ol>
                <ol className="text-[#545454] text-[14px] hover:text-[#116EFC]"> 
                    <a href="#FaqSec" className="py-[6px] px-[20px]">FAQ</a>
                </ol>
                <ol className="text-[#545454] text-[14px] hover:text-[#116EFC]">
                    <a href="#JoinOurCommunity" className="py-[6px] px-[20px]">Contact</a>
                </ol>
            </div>

            {/* Buttons Section (Hidden on Mobile) */}
            <div className="items-center w-[299px] gap-[10px] xl:mr-[150px] lg:mr-[80px] md:mr-[21px] mr-[20px] hidden md:flex">
                <div className="w-full  ">
                    <Button 
                        label="Login" 
                        BackColor="white"
                        BorderColor="#116EFC" 
                        BW={1}
                        width="max-w-[120px] w-full"
                        textColor="#0F64E5" 
                      onClick={() => router.push('/SignIn')}
                     />
                </div>
                <div className="w-full  ">
                    <Button 
                      label="Create Account" 
                      BorderColor="#116EFC" 
                      BW={1} 
                      textColor="" 
                      onClick={() => router.push('/CreateAccount')}
                    />
                </div>
            </div>
        </nav>
    );
};

 
export default AuthNavBar;