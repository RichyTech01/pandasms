'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import SuccesImg from "../../public/Svg/SuccesMessageIcon.svg";
import Button from "./Button";
import { motion } from "framer-motion";
import CloseIcon from "../../public/DashboardSvg/CloseIcon.svg"

const SuccesfullMessage = ({handleClose}: {handleClose: () => void}) => {

  const router = useRouter();

  return (
    <div>
      {/* Desktop Success Message */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="bg-[#F9FAFB] rounded-[16px] hidden md:flex py-[27.2px] px-[26px] w-[480px] absolute top-0 right-0 items-center mt-36 mr-20"
      >
        <div className="absolute right-0 top-0 center mt-[14px] h-[28px] w-[28px] mr-[15px]  " onClick={handleClose} >
          <Image src={CloseIcon} alt="close-icon"/>
        </div>

        <Image src={SuccesImg} alt="success-img" />
        <div className="ml-[30px] max-w-[305px] ">

          <p className="bt text-[16px]">Password Changed</p>
          <p className="text-[14px] text-[#131619] mt-[8px]">
            Your password has been changed successfully. Login to access account.
          </p>
        </div>
      </motion.div>

      {/* Mobile Success Message - Fullscreen (No Scroll) */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="absolute inset-0 flex flex-col items-center justify-center md:hidden bg-white h-[calc(100vh-64px)] overflow-hidden"
      >
        <div className="w-full max-w-[350px] flex flex-col items-center text-center px-4">
          <Image src={SuccesImg} alt="success-img" className="w-[80px] h-[80px]" />
          <p className="text-[18px] font-semibold text-[#116EFC] mt-[20px]">Password Changed</p>
          <p className="text-[14px] text-[#131619] mt-[8px]">
            Your password has been changed successfully. Login to access account.
          </p>
        </div>

        {/* Button Section */}
        <div className="w-full px-6 absolute bottom-10 max-w-[335px]">
          <Button label="Login" onClick={() => router.push('/SignIn')} />
        </div>
      </motion.div>
    </div>
  );
};

export default SuccesfullMessage;
