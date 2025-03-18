import DashboardHeader from "@/components/DashboardInterface/DashboardHeader";


import Sidebar from "@/components/DashboardInterface/Sidebar";


const Layout = ({ children }: { children: any }) => {

  return (
    <div className="h-screen flex flex-col">
      {/* Full-width Header */}
      <DashboardHeader />

      <div className=" flex-1 flex ">
        {/* Sidebar */}
      
       <Sidebar />

        {/* Main Content */}
        <div className="flex-1 md:px-[36px] py-[20px] md:bg-[#F9FAFB]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
