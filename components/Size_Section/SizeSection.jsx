"use client"

import React , { useState } from "react"
import Image from 'next/image'
import { videoSectionPhrases } from "@/constants";


const SizeSection = () => {
  const [selected, SetSelected] = useState('null')

  const hanldeChoose = () => {
    alert("Not connected to any store yet ")
  }


  const HandleTabs = (index) => {
    if (selected ===  index) {
      SetSelected('null')
    } else if ( selected !== index) {
      SetSelected(index)
    }
  }

  return (
    <div className="">
      <div className=" mx-64 flex-col  relative mt-20 absolute " >

      <p className="text-[24px] text-[#353535] text-center font-architects-daughter ml-20 " >Calm yourself</p>

      <h1 className="text-[#222222] font-serif text-[50px] font-medium text-center " >
        Discover 
        <div className="relative inline-block">
          <div style={{ borderBottom: "24px solid #FFD271" }} className="absolute bottom-4 left-0 w-full rounded-xl z-1 opacity-50 "></div>
          <h1 className="font-serif text-[50px] z-10 text-[#222222] ml-2 mr-2 relative"> Each Size</h1>
        </div>
        Below

      </h1>
      <p className="text-[#353535] text-[20px] text-center  " >Each Balmy is elaborately hand-crafted to give you the most soothing special tones in harmony.</p>
      

      <div className="flex justify-end mx-60 mt-10" >
        <Image src="/click_tabs.png" height={77} width={174} alt="click tabs" />
      </div>
      
      <div className="flex justify-center">
        <div className="flex justify-center  mb-20">
          <div className="w-[457px] h-[50px] bg-[#F0EBDD] rounded-full flex justify-between gap-2 items-center relative">
            <div onClick={() => HandleTabs(0)}  className={` text-[18px] text-[#222222] cursor-pointer w-[157px]  h-[50px] ${( selected === 0) ?  'bg-[#FFD271]' : ''  } rounded-full text-center `}><p className="mt-3 " >15 Tones</p></div>
            <div onClick={() => HandleTabs(1)}  className={` text-[18px] text-[#222222] cursor-pointer w-[157px]  h-[50px] ${(selected ===1) ?   'bg-[#FFD271]'  : '' } rounded-full text-center `}><p className="mt-3" >11 Tones</p></div>
            <div onClick={() => HandleTabs(2)}  className={` text-[18px] text-[#222222] cursor-pointer w-[157px]  h-[50px] ${(selected ===2) ?    'bg-[#FFD271]'  : '' }  rounded-full text-center `} ><p className="mt-3" >6 Inches</p></div>
          </div>
        </div>
      </div>
      </div>


    <div className="">

      <div className="flex justify-center z-10 ">
        <div className="w-[1355px] h-[802px] bg-[#F0EBDD] rounded-2xl flex shadow-2xl z-0 static mt-6 ">
          <div className="flex justify-end absolute 2xl:right-80  max-2xl:right-20 max-md:right-4  ">
            <Image src="/drumstick.png" width={54} height={54} />
          </div>

          <div name="left" className="flex-1 flex-col ml-10 mt-10 " >
            <div className="bg-[#FFD271] h-[55px] w-[501px] rounded-2xl z-0 ml-4 border-[0.1px] border-[#414141]  " >
              <h2 className="text-[32px] font-serif text-[#222222] text-center" >14 Inches - 15 Tones (Best Value)</h2>
            </div>
            <div className="bg-[#FFD271] h-[290px] w-[615px] rounded-2xl mb-4 z-10" >
              <Image src="/Video.png" width={615}  height={290} alt="video image"  />
            </div>

            <ul className="flex flex-col  items-start"> 
              <div className="bg-[#F8F7F4] h-[320px] w-[614px] rounded-2xl border-[0.5px] border-[#414141] shadow-lg mt-4 " >
                  {videoSectionPhrases.map((item) => (
                    <li key={item.id} className='flex items-center justify-start mt-4 ml-4  '>
                      <Image  src={item.image} width={16} height={16} alt="music" />
                      <span className='text-[#353535] text-start text-[16px] ml-2 '>{item.phrase}</span>
                    </li>
                  ))}
              </div>
            </ul>

          </div>

          <div name="right" className="flex-1"  >
            <div className="bg-[#FFFFFF] w-[288px] h-[47px] rounded-full mt-[83px] border-[0.1px] border-[#414141] " >
              <p className="text-[#222222] font-serif text-[26px]  text-center " >Today It Comes With:</p>
            </div>

            <div className="w-[590] h-[528px] bg-[#BDB8A8] rounded-lg border-[0.3px] border-[#414141] flex items-center justify-center ">
              <h1 className="text-[#414141] text-center" >An awsome deal design will be here </h1>
            </div>

            <div className="w-[590px] h-[70px] rounded-2xl border-[0.01px] border-[#414141] flex justify-center items-center bg-[#FFD271] mt-4 cursor-pointer"  onClick={hanldeChoose}>
              <h2 className="text-[22px] text-[#222222] font-serif font-medium  ">Choose Your Balmy Now!</h2>

            </div>

          </div>
        </div>
      </div>
    </div>







    </div>
  )
}

export default SizeSection