"use client";
import { useState } from "react";
import DashboardInterface from "@/components/DashboardInterface/dashboard";
import WantsToPurchaseModal from "@/Modals/DashboardModals/WantsToPurchaseModal";

const Dashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="flex-grow md:block ">
      {/* Wrap entire content inside relative container */}
      <div className="relativ">
        {/* Blur full content page except sidebar & header */}
        <div
          className={`transition-all duration-100 ${
            showModal ? "blur-sm pointer-events-none flex-1" : ""
          }`}
        >
          <DashboardInterface onClick={() => setShowModal(true)} />
        </div>

        {/* Modal (absolute to cover full content page) */}
        {showModal && (
          <div className="fixed pt-[120px] scroll-container flex items-center justify-center inset-0 bg-[#F9FAFB] md:bg-transparent ">
            <WantsToPurchaseModal isOpen={showModal} setIsOpen={setShowModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;