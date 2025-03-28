
import Image from "next/image";
import DropDown from "../../public/DashboardSvg/DropDownIcon.svg"


const SelectCountry = ({width = "", onClick}:{width?: string, onClick?: () => void
}) => {

    return ( 
        <div className={`border border-[#E6E6E6] rounded-[8px] px-[21px] py-[16px] between cursor-pointer mt-[16px] md:mt-0 ${width}  `} onClick={onClick}>
           <p className="text-[#545454] text-[14px]">Select country</p>
           <Image src={DropDown} alt="drop-down" />
       </div>
     );
}
 
export default SelectCountry;