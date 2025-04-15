"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import DasboardActiveicon from "../../../public/DashboardSvg/ActiveDashIcon.svg";
import Dasboardicon from "../../../public/DashboardSvg/DashboardIcon.svg";
import AccountIcon from "../../../public/DashboardSvg/AccountIcon.svg";
import VeriActiveIcon from "../../../public/DashboardSvg/VeriActive.svg";
import VerificationIcon from "../../../public/DashboardSvg/VerificationIcon.svg";
import HistoryIcon from "../../../public/DashboardSvg/HistoryIcon.svg";


const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[226px] bg-[#116EFC] pt-[39px] px-[17px] hidden md:flex h-full">
      <ul>
        <li
          className={`rounded-[8px] ${
            pathname === "/Dashboard"
              ? "font-semibold text-[14px] text-[#0F64E5] bg-white"
              : "text-white hover:bg-[#FFFFFF1A] font-normal"
          } cursor-pointer`}
        >
          <Link href="/Dashboard" className="flex items-center py-[16px] px-[22px] w-full">
            {pathname === "/Dashboard" ? (
              <Image src={DasboardActiveicon} alt="dash-icon" />
            ) : (
              <Image src={Dasboardicon} alt="dash-icon" />
            )}
            <span className="ml-[8px]">Dashboard</span>
          </Link>
        </li>

        <li
          className={`my-[20px] rounded-[8px] ${
            pathname === "/Verification"
              ? "font-semibold text-[14px] text-[#0F64E5] bg-white"
              : "text-white font-normal hover:bg-[#FFFFFF1A]"
          } cursor-pointer`}
        >
          <Link href="/Verification" className="flex items-center py-[16px] px-[22px] w-full">
            {pathname === "/Verification" ? (
              <Image src={VeriActiveIcon} alt="veri-icon" />
            ) : (
              <Image src={VerificationIcon} alt="veri-icon" />
            )}
            <span className="ml-[8px]">Verification</span>
          </Link>
        </li>

        <li
          className={`rounded-[8px] ${
            pathname === "/History"
              ? "font-semibold text-[14px] text-[#0F64E5] bg-white"
              : "text-white hover:bg-[#FFFFFF1A] font-normal"
          } cursor-pointer`}>
          <Link href="/History" className="flex items-center py-[16px] px-[22px] w-full">
            {pathname === "/History" ? (
              <Image src={DasboardActiveicon} alt="history-icon" />
            ) : (
              <Image src={HistoryIcon} alt="history-icon" />
            )}
            <span className="ml-[8px]">History</span>
          </Link>
        </li>

        <li
          className={`my-[20px] rounded-[8px] ${
            pathname === "/Account"
              ? "font-semibold text-[14px] text-[#0F64E5] bg-white"
              : "text-white hover:bg-[#FFFFFF1A] font-normal"
          } cursor-pointer`}
        >
          <Link href="/Account" className="flex items-center py-[16px] px-[22px] w-full">
            {pathname === "/Account" ? (
              <Image className="border border-blue-500 rounded-full" src={AccountIcon} alt="account-icon" />
            ) : (
              <Image className="border border-white rounded-full" src={AccountIcon} alt="account-icon" />
            )}
            <span className="ml-[8px]">Account</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
