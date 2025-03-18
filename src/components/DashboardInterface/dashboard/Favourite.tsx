
import ServicesCard from "@/Common/ServicesCard";

const Features = () => {
    return ( 
        <div className=" ">
            <h2 className="semiSix mt-[20px]">Favourites</h2>
            <div className="mt-[12px] gap-x-3 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
            </div>
        </div>
     );
}
 
export default Features;
