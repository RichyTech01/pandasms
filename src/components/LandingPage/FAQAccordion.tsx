'use client'
import AccordionIcon from "../../../public/Svg/AccordionIcon.svg"
import FaqOpened from "../../../public/Svg/FAqOpenedIcon.svg"
import Image from "next/image";
import { useState } from "react";

const faqs = [
  { question: "What is Next.js?", answer: "You can deposit money in using payment method which include Crypto, Bank Transfer, Debit card etc. Complete the registration to access all payment method.." },
  { question: "How do I install Next.js?", answer: "You can deposit money in using payment method which include Crypto, Bank Transfer, Debit card etc. Complete the registration to access all payment method..." },
  { question: "Is Next.js good for SEO?", answer: "You can deposit money in using payment method which include Crypto, Bank Transfer, Debit card etc. Complete the registration to access all payment method.." },
  { question: "Is Next.js good for SEO?", answer: "You can deposit money in using payment method which include Crypto, Bank Transfer, Debit card etc. Complete the registration to access all payment method.." },
  { question: "Is Next.js good for SEO?", answer: "You can deposit money in using payment method which include Crypto, Bank Transfer, Debit card etc. Complete the registration to access all payment method.." },
  { question: "Is Next.js good for SEO?", answer: "You can deposit money in using payment method which include Crypto, Bank Transfer, Debit card etc. Complete the registration to access all payment method.." },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:gap-y-[20px] gap-y-[30px] grid md:grid-rows-3 md:grid-cols-2 justify-center gap-x-[45px] w-full px-[20px]  ">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`bg-[#F9FAFB] border rounded-[20px] max-w-[548px] w-full md:px-[36px] px-[16px] md:py-[32px] py-[23.5px] cursor-pointer group transition-all duration-300 ease-in-out hover:border-[#116EFC]  ${
            openIndex === index ? "border border-[#116EFC] md:min-h-[110px] min-h-[100px]" : "md:h-[110px] h-[100px] border-[#E6E6E6]"
          }`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center ">
            <div className="w-[87%]">
              <h3 className="font-semibold text-[16px] leading-[20.16px]">{faq.question}</h3>
              <p className="text-[14px] leading-[17.64px] mt-[9px] text-[#131619]">How can i top up my balance on the website?</p>
            </div>
            {openIndex === index ? (
              <div className="h-[40px] w-[40px] rounded-[12px] center bg-[#116EFC]">
                <Image src={FaqOpened} alt="FaqOpened" />
              </div>
            ) : (
              <div className="center group-hover:bg-[#116EFC] bg-[#0A406C] h-[40px] w-[40px] rounded-[12px]">
                <Image src={AccordionIcon} alt="accordionIcon" />
              </div>
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-[200px opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            {openIndex === index && (
              <p className="text-[14px] leading-[17.64px] text-[#131619] w-auto">
                {faq.answer}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;