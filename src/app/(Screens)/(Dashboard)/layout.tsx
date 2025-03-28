import DashboardHeader from "@/components/DashboardInterface/DashboardHeader";


import Sidebar from "@/components/DashboardInterface/Sidebar";


const Layout = ({ children }: { children: any }) => {

  return (
    <div className="h-screen flex flex-col relative">
      <DashboardHeader />

      <div className="flex-1 flex  ">
        <div className="mt-[122px] ">
          <Sidebar />
        </div>

       <div className="flex-1 md:px-[36px] py-[20px] md:bg-[#F9FAFB] relative sm:mt-[40px] ">
       {children}</div>
      </div>
    </div>
  );
};

export default Layout;
