
import HistoryDesktopView from "@/components/DashboardInterface/HistoryInterface/HistoryDesktopView";
import HistoryMobileView from "@/components/DashboardInterface/HistoryInterface/HistoryMobileView";


const History = () => {
    return ( 
        <div className="w-full lg:px-[48px] md:pt-[45px] mt-[120px] px-[20px] flex-1 rounded-[20px] relative ">
            <h1 className="text-[#131619] text-[18px] font-bold ">Orders History</h1>
            <div className="hidden md:flex  mt-[20px]">
                <HistoryDesktopView />
            </div>

            <div className="md:hidden flex  ">
                <HistoryMobileView />
            </div>
        </div>
     );
}
 
export default History;