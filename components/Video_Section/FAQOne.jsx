"use client"

import Image from 'next/image';
import { useState } from 'react';


const FAQOne = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`bg-[#F8F7F4] w-[665px] rounded-lg border-[#B1B1B1] border-2 overflow-hidden shadow-md`}>
      <div className={`flex mx-20 items-center h-[80px] justify-between`}>
        <div>
          <h1 className='font-serif text-[20px] text-[#353535]' >{question}</h1>
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          <Image src={expanded ? '/faq_top.png' : '/faq_down.png'} width={22} height={22} alt="haja" />
        </div>
      </div>
      {expanded && (
        <div className="mx-20 mt-1 h-auto font-[#353535] text-[16px] mb-10 opacity-70 ">{answer}</div>
      )}
    </div>
  );
};

export default FAQOne;
