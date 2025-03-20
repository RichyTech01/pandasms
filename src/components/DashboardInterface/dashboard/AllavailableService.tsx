import ServicesCard from "@/Common/ServicesCard";

interface AllavailableServiceProps {
  onClick: () => void;
}

const AllavailableService = ({ onClick }: AllavailableServiceProps) => {
  return ( 
    <div>
      <h2 className="semiSix mt-[20px]">All Available Services</h2>
      <div className="mt-[12px] gap-x-3 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        <ServicesCard onClick={onClick} />
        <ServicesCard onClick={onClick} />
        <ServicesCard onClick={onClick} />
        <ServicesCard onClick={onClick} />
      </div>
    </div>
  );
};

export default AllavailableService;
