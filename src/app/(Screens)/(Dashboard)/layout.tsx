import DashboardHeader from "@/components/DashboardInterface/DashboardHeader";
import Sidebar from "@/components/DashboardInterface/Sidebar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col relative">
      <DashboardHeader />

      <div className="flex-1 flex">
        {/* Static Sidebar */}
        <div className="w-[250px] fixed top-[126px] h-[calc(100vh-94px)] overflow-y-auto">
          <Sidebar />
        </div>

        <div className="flex-1 md:ml-[228px] relative sm:mt-[40px] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;