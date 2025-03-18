  
import SearchInput from "@/Common/SearchInput";
import Image from "next/image";
import DropDown from "../../../../../public/DashboardSvg/DropDownIcon.svg"
import AllavailableService from "@/components/DashboardInterface/dashboard/AllavailableService";
import Features from "@/components/DashboardInterface/dashboard/Favourite";

const Dashboard = () => {
    return ( 
        <div className=" flex-grow md:flex ">
            <div className="bg-white w-full md:px-[48px] md:pt-[45px] mt-[20px] px-[20px] flex-1 ">
                <div className="md:justify-between md:flex-row flex flex-col  ,md:items-center ">
                    <div className="mb-[16px] ">
                        <p className="text-[#131619] text-[16px] font-semibold ">Get instant SMS verification</p>
                        <p className="text-[#8A8A8A] text-[14px] mt-[8px] ">
                        Real Phones From USA. Non-Voip.</p>
                    </div>
                    <div className=" md:flex-row items-center flex-col flex">
                        <SearchInput />
                        <div className="border border-[#E6E6E6] rounded-[8px] px-[21px] lg:max-w-[243px] md:max-w-[200px] w-full py-[16px] between md:ml-[20px] cursor-pointer mt-[16px] md:mt-0 ">
                            <p className="text-[#545454] text-[14px] ">Select country</p>
                            <Image src={DropDown} alt="drop-down" />
                        </div>
                    </div>
                </div> 

                <div className="">
                  <Features/>
                </div>

              <div>
                <AllavailableService />
              </div>
            </div>
        </div>
     );
}
 
export default Dashboard;