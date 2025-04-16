'use client'

import { useEffect } from "react";

const ClipBoardSuccess = ({ setShowSuccess }: { setShowSuccess: React.Dispatch<React.SetStateAction<boolean>> }) => {
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [setShowSuccess]);

  return ( 
    <div className="bt bg-white rounded-[16px] text-[12px] font-medium center mx-auto max-w-[200px] max-h-[30px] h-full">
      Copied to clipboard
    </div>
  );
};

export default ClipBoardSuccess;
