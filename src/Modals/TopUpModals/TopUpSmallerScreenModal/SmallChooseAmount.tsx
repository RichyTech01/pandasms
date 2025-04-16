'use client'; 

import { useState } from 'react';
import Input from '@/Common/Input';
import Button from '@/Common/Button';

type ChooseAnAmountProps = {
    // setShowModal: (visible: boolean) => void;
    handleNextPage: () => void
}

const presetAmounts = [10, 50, 100, 200, 400, 500, 1000, 1500 ];


const SmallChooseAmount = ({handleNextPage,}: ChooseAnAmountProps) => {

    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const [customAmount, setCustomAmount] = useState('');
  
    const handleClick = (amount: number) => {
      setSelectedAmount(amount);
      setCustomAmount(amount.toString());
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCustomAmount(e.target.value);
      setSelectedAmount(null);
    };

    return ( 
        <div className="w-[90%] min-h-[496px] bg-white bb md:fixed inset-0 rounded-[12px] z-50 md:mt-[150px] max-w-[700px] mx-auto px-[20px] relative">
        <div className="py-[40px] max-w-[546px] mx-auto">
        <div className="center flex-col max-w-[331px] mx-auto">
            <h1 className="black text-[18px] font-bold ">Choose An Amount</h1>
            <p className="mt-[8px] text-center ">Choose or enter your proffered amount to top-up wallet</p>
        </div>

         <div className="mt-[30px] ">
         <div className="grid lg:grid-cols-5 grid-cols-4   item-center justify-between flex-wrap gap-y-[20px] gap-x-[12px] ">
                {presetAmounts.map((amount) => (
                <button
                    key={amount}
                    onClick={() => handleClick(amount)}
                    className={`py-[25px] max-w-[99px] w-full rounded-[16px] border text-center transition 
                    ${selectedAmount === amount
                        ? 'border-[#116EFC] text-[#116EFC] font-semibold'
                        : 'border-[#E6E6E6] text-[#8A8A8A] hover:border-blue-400 hover:text-blue-500'}`}
                >
                    ${amount.toLocaleString()}
                </button>
                ))}
            </div>

            <div className='mt-[30px]  mx-auto'>
               <Input 
                 label='Enter Amount'
                 placeholder='$1,000' 
                 type='number'
                 value={customAmount}
                 onChange={handleInputChange}
                />
            </div>

            <div className='mt-[30px]'>
                <Button 
                  label='Top-Up Account'
                  onClick={handleNextPage}
                />
            </div>
         </div>
         </div>
    </div>
     );
}
 
export default SmallChooseAmount;