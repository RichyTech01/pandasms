'use client';

import Image from 'next/image';

type PaymentCardProps = {
  icon: string;
  title: string;
  onClick: () => void;
};

const PaymentCard = ({ icon, title, onClick }: PaymentCardProps) => {
  return (
    <button
      className="flex items-center bg-white pl-[28px] py-[16px] transition duration-300 border-[0.5px] border-[#E6E6E6] rounded-[12px] md:max-w-[219px] w-full "
      onClick={onClick}
    >
      <Image src={icon} alt={title} width={50} height={50} className="mr-[12px] rounded-full" />
      <span className="text-[14px] text-[#131619] font-Geint ">{title}</span>
    </button>
  );
};

export default PaymentCard;
