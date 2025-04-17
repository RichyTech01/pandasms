'use client'


import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import SuccesImg from "../../public/Svg/SuccesMessageIcon.svg";


const SuccesMessageMobile = () => {

  const router = useRouter();

    return ( 
        <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="absolute inset-0 flex flex-col items-center h-screen/20 justify-center md:hidden bg-white h-[calc(100vh-64px)] overflow-hidden  "
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
     );
}
 
export default SuccesMessageMobile;