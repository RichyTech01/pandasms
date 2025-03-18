
import ServicesCard from "@/Common/ServicesCard";

const AllavailableService = () => {
    return ( 
        <div className="">
            <h2 className="semiSix mt-[20px]">All Available Services</h2>
            <div className="mt-[12px] gap-x-3 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  ">
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
            </div>
        </div>
     );
}
 
export default AllavailableService;