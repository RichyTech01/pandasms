'use client'
import Button from "@/Common/Button";
import Image from "next/image";
import Logo from "../../../public/Svg/Logo.svg";
import { useState, } from "react";
import Hamburger from "../../../public/Svg/Hamburger.svg"

const NavBar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="md:h-[120px] h-[100px] border-b-[0.5px] border-b-[#E6E6E6] flex items-center justify-between relative ">
            {/* Logo Section */}
            <div className="LandingResp">
                <h1 className="text-[#0F64E5] font-Geint leading-[31.7px] font-bold md:text-[31.7px] flex items-center text-[19.97px]">
                    <Image src={Logo} alt="logo" className="mr-[8.97px]" priority />
                    PandaSMS
                </h1>
            </div>

            {/* Desktop Navigation Links (Hidden on Mobile) */}
            <div className="w-[262px] items-center justify-around hidden md:flex">
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

            {/* Mobile Menu Toggle (Hamburger Icon) */}
            <div className="md:hidden mr-[20px] cursor-pointer w-[30px] h-[30px] rounded-[4px] bg-[#F9FAFB] center " onClick={toggleMobileMenu} >
               <Image src={Hamburger} alt="hamburger"/>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isMobileMenuOpen && (
                <div className="absolute top-[120px] left-0 w-full bg-white border-t border-[#E6E6E6] md:hidden">
                    <ol className="text-[#545454] text-[14px] hover:text-[#116EFC] block text-center py-2">
                        <a href="" className="block py-[6px] px-[20px]">Home</a>
                    </ol>
                    <ol className="text-[#545454] text-[14px] hover:text-[#116EFC] block text-center py-2">
                        <a href="" className="block py-[6px] px-[20px]">FAC</a>
                    </ol>
                    <ol className="text-[#545454] text-[14px] hover:text-[#116EFC] block text-center py-2">
                        <a href="" className="block py-[6px] px-[20px]">Contact</a>
                    </ol>
                </div>
            )}

            {/* Buttons Section (Hidden on Mobile) */}
            <div className="items-center w-[299px] gap-[10px] xl:mr-[150px] lg:mr-[80px] md:mr-[21px] mr-[20px] hidden md:flex">
                <div className="w-full">
                    <Button label="Login" BackColor="white" BorderColor="#116EFC" BW={1} MW={120} textColor="#0F64E5" />
                </div>
                <div className="w-full">
                    <Button label="Create Account" BorderColor="#116EFC" BW={1} textColor="" />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;