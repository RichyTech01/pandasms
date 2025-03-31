"use client";
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from "next/navigation";

import DasboardActiveicon from "../../../public/DashboardSvg/ActiveDashIcon.svg"
import Dasboardicon from "../../../public/DashboardSvg/DashboardIcon.svg"
import AccountIcon from "../../../public/DashboardSvg/AccountIcon.svg"
import VeriActiveIcon from "../../../public/DashboardSvg/VeriActive.svg"
import VerificationIcon from "../../../public/DashboardSvg/VerificationIcon.svg"
import HistoryIcon from "../../../public/DashboardSvg/HistoryIcon.svg"

const Sidebar: React.FC = () => {
  const pathname = usePathname();

    return (
        <aside className="w-[226px] bg-[#116EFC] pt-[39px] px-[17px] hidden md:flex h-full">
          <ul>
            <li className={`py-[16px] px-[22px] rounded-[8px] fc ${pathname === "/Dashboard" ? "font-semibold text-[14px] text-[#0F64E5] bg-white " : "text-white hover:bg-[#FFFFFF1A] font-normal "} cursor-pointer`}>
             {pathname === "/Dashboard"? <Image src={DasboardActiveicon} alt="dash-ison"/>:<Image src={Dasboardicon} alt="dash-ison"/> } 
              <Link href="/Dashboard" className="ml-[8px]">Dashboard</Link>
            </li>

            <li className={`my-[20px] py-[16px] px-[22px] rounded-[8px] fc ${pathname === "/Verification" ? "font-semibold text-[14px] text-[#0F64E5] bg-white " : "text-white font-normal hover:bg-[#FFFFFF1A] "} cursor-pointer`}>
               {pathname === "/Verification"? <Image src={VeriActiveIcon} alt="dash-ison"/>:<Image src={VerificationIcon} alt="dash-ison"/> } 
              <Link href="/Verification" className="ml-[8px]">Verification</Link>
            </li>

            <li className={`py-[16px] px-[22px] rounded-[8px] fc ${pathname === "/History" ? "font-semibold text-[14px] text-[#0F64E5] bg-white " : "text-white hover:bg-[#FFFFFF1A] font-normal "} cursor-pointer`}>
            {pathname === "/History"? <Image src={DasboardActiveicon} alt="dash-ison"/>:<Image src={HistoryIcon} alt="dash-ison"/> } 
              <Link href="/History" className="ml-[8px]">History</Link>
            </li>

            <li className={`my-[20px]  py-[16px] px-[22px] rounded-[8px] fc ${pathname === "/Account" ? "font-semibold text-[14px] text-[#0F64E5] bg-white " : "text-white  hover:bg-[#FFFFFF1A] font-normal "} cursor-pointer`}>
            {pathname === "/Account"? <Image src={DasboardActiveicon} alt="dash-ison"/>:<Image className='border border-white rounded-full  ' src={AccountIcon} alt="dash-ison"/> } 
              <Link href="/Account" className="ml-[8px]">Account</Link>
            </li>
          </ul>
        </aside>
    );
};

export default Sidebar;