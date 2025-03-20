import DashboardHeader from "@/components/DashboardInterface/DashboardHeader";


import Sidebar from "@/components/DashboardInterface/Sidebar";


const Layout = ({ children }: { children: any }) => {

  return (
    <div className="h-screen flex flex-col relative">
      <DashboardHeader />

      <div className="flex-1 flex ">
          <Sidebar />

       <div className="flex-1 md:px-[36px] py-[20px] md:bg-[#F9FAFB] relative">
       {children}</div>
      </div>
    </div>
  );
};

export default Layout;
