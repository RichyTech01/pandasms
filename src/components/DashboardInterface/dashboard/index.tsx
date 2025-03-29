'use client'

import Features from "./Favourite";
import SearchInput from "@/Common/SearchInput";
import AllavailableService from "./AllavailableService";
import SelectCountry from "@/Common/SelectCountry";


const DashboardInterface = ({onClick}: {onClick: () => void}) => {


  return ( 
    <div className="md:px-[36px] py-[20px] md:bg-[#F9FAFB] h-screen">
      <div className="bg-white w-full lg:px-[48px] md:py-[45px] mt-[120px] px-[20px] flex-1 rounded-[20px] relative  ">
          <div className="md:justify-between md:flex-row flex flex-col md:items-center">
              <div className="mb-[16px]  ">
                  <p className="text-[#131619] text-[16px] font-semibold">
                      Get instant SMS verification
                  </p>
                  <p className="text-[#8A8A8A] text-[14px] mt-[8px]">
                      Real Phones From USA. Non-Voip.
                  </p>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full lg:w-[341px] md:w-[243px]">
                  <SearchInput 
                    placeholder="Search service"
                  />
                </div>
               <div className="md:max-w-[200px] md:ml-[20px] w-full">
                 <SelectCountry 
                 />
               </div>
            </div>
          </div> 

          <div>
              <Features onClick={onClick} />
          </div>
          
          <div>
              <AllavailableService onClick={onClick} />
          </div>
      </div>
      </div>
  );
};

export default DashboardInterface;
