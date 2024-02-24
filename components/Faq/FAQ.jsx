"use client"

import FAQOne from "../Video_Section/FAQOne"
import { FAQ1 } from "@/constants"
import { FAQ2 } from "@/constants"
import Image from  'next/image'


const FAQ = () => {
  const handleClick = () => {
    alert("Not connected to any store yet ")
  }
  return (
    <div className="bg-[#F0EBDD] mt-3 h-[790px] flex justify-center">
      <div className="flex flex-col items-center  w-[1400px] h-[570px]">
        <p className="font-architects-daughter text-[24px] text-[#353535] text-center  mt-20">Frequently asked questions</p>



      <div className="relative inline-flex items-center">
        <p className="text-[50px] text-[#222222] font-serif font-semibold">Got Some</p>
        <div style={{ borderBottom: "24px solid #FFD271" }} className="absolute bottom-[12px] right-0 w-64 rounded-xl z-1 opacity-60"></div>
        <p className="font-serif text-[50px] z-10 text-[#222222] font-semibold ml-2 mr-2 relative">Questions?</p>
      </div>




      <p className="text-[20px] w-[790px] text-[#353535] mt-4 text-center" >If you haven't found the answer you need, email us at support@balmydrum.com. We will get back to you in just 6 to 12 hours!</p>


            <div className="flex  mt-20 gap-10">
              <div className="flex flex-1 flex-col items-center gap-4" >
                {FAQ1.map((item) => (
                  <div key={item.id}>
                    <FAQOne question={item.question} answer={item.answer} />
                  </div>
                ) )}
              </div>

              <div className="flex flex-1 flex-col items-center gap-4" >
                {FAQ2.map((item) => (
                  <div key={item.id}>
                    <FAQOne question={item.question} answer={item.answer} />
                  </div>
                ) )}
              </div>
            </div>
        <div onClick={handleClick} className=" cursor-pointer mt-28 hover:scale-105 transition-transform duration-300 ease-in-out " >
          <Image src="/button.png" width={292} height={70} alt="button" />
        </div>
      </div>
    </div>
  )
}

export default FAQ
