
import Closeicon from "../../public/DashboardSvg/CloseIcon.svg"
import Image from "next/image";

const CancelIcon = ({setIsOpen}: {setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {

    return ( 
        <div className="bg-[#F9FAFB] w-[26px] h-[28px] rounded-full center cursor-pointer  " onClick={() => setIsOpen(prev => !prev)}>
        <Image src={Closeicon} alt="close-icon"/>
      </div>
     );
}
 
export default CancelIcon;