"use client"
import Image from "next/image";
import Discount from "./Discount";
import ColorCard from "./ColorCard";
import { colors } from "@/constants";
import AddToCard from "./AddToCard";
import React, { useState } from "react";
import Link from 'next/link';


const Right = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [activeCard, SetActiveCard] = useState(null)

  const HandleCard= (index) => {
    SetActiveCard(index);
  }

  const HandleBorder  = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  }

  
  return (
    <div className="">
      <div className="flex justify-start gap-4 ">
        <div className="bg-[#FFD271] w-[125px] h-[30px] rounded-3xl flex justify-center items-center ">
          <Image src="/stars_1.png" width={85} height={13} alt="starts" />
        </div>
        <div className="flex justify-center items-center">
          <h2 className="text-center text-[#222222] ">
            4.9 / 5.0 - 18281 Ratings
          </h2>
        </div>
      </div>

      <h1 className="font-serif text-[#222222] text-[50px] font-medium mt-3   ">
        Meet Balmy
      </h1>


      <h2 className=" font-semibold  font-italic ">
      </h2>

      <div className="relative inline-block">
        <div style={{ borderBottom: "10px solid #F2E5BF" }} className="absolute bottom-2 left-0 w-full  border-yellow-300"></div>
        <p className="font-serif text-2xl relative text-[20px]  z-10 text-[#222222] font-semibold ">Hand-Crafted, Authecnic Drum</p>
      </div>

      <p className="font-medium mt-3 text-[16px] text-[#222222]">
        Sound healing, mesmerizing harmonies even without any experience in just
        seconds.
      </p>

      <div className="bg-[#F4E6D2] text-[#624C3C] rounded-2xl inline-flex items-center mt-5 relative h-8 pr-5 mb-6">
        <div className="ml-2">
          <Image src="/alert.png" width={15} height={15} alt="alert" />
        </div>
        <p className="ml-2 text-[14px] text-[#624C3C]">The sizes in our videos are 10 inches and 14 inches</p>
      </div>


      <Discount number="55" />

      <h1 className="text-[50px] text-[#222222] font-serif mt-0 " >$139.90 <span className="text-[#AB5555] text-[20px] line-through">$139.90</span></h1>
      <h3 className="text-[#222222] font-semibold serif mt-4">Choose Size:</h3>



      <div className="flex  justify-start gap-10  ">


        <div>
          <div onClick={() => HandleCard(0)}   className={`flex flex-col  shadow-lg rounded-lg justify-center w-[125px] h-[158px] cursor-pointer ${activeCard === 0 ? 'border-2 border-blue-500 ' : ''} `} >
            <div className="flex justify-center cursor-pointer">
              <Image src="/drumb.png" width={50} height={50} alt="dumb"/>
            </div>
            <p className="text-[#222222] font-serif text-[20px] text-center  font-medium" >Demo Size</p>
            <p className="text-[#706D65] text-center" >6 inches </p>
          </div> 
        </div>

        <div>
          <div onClick={() => HandleCard(1)}  className={`flex bg-[#E8E4DA] flex-col  shadow-lg  justify-center w-[132px] h-auto rounded-lg cursor-pointer ${activeCard === 1 ? 'border-2 border-blue-500 ' : ''} `} >
            <div   className="bg-yellow-500 h-5  text-[#53482B] font-semibold text-[12px] text-center  rounded-t-md   ">MOST POPULAR</div>
            <div className="flex justify-center">  
              <Image src="/drumb_10.png" width={191} height={191} alt="dumb"/>
            </div>
            <p className="text-[#222222] font-serif text-[20px] text-center  font-medium" >11 Tones</p> 
            <p className="text-[#706D65] text-center" >10 inches </p> 
          </div> 
        </div>

        <div>
          <div onClick={() => HandleCard(2)}  className={` flex bg-[#E8E4DA] flex-col  shadow-lg  justify-center w-[172px] h-auto rounded-lg cursor-pointer ${activeCard === 2 ? 'border-2 border-blue-500 ' : ''}   `} >
            <div  className="bg-yellow-500 h-5  text-[#53482B] font-semibold text-[12px] text-center  rounded-t-md  ">BEST VALUE </div>
            <div className="flex justify-center">  
              <Image src="/drumb_10.png" width={241} height={241} alt="dumb"/>
            </div>
            <p className="text-[#222222] font-serif text-[20px] text-center  font-medium" >15 Tones</p> 
            <p className="text-[#706D65] text-center" >14 inches </p> 
          </div> 
        </div>
      </div>


  <div className="relative inline-block">
    <div style={{ borderBottom: "10px solid #F2E5BF" }} className="absolute bottom-2 left-0 w-full  border-yellow-300"></div>
    <p className="font-serif text-2xl relative z-10 text-[#222222]">Compare Sizes+</p>
  </div>



  <div className="mt-6" >
    <p className="text-[#222222] text-[25px] font-serif mb-4 ">Choose Color:</p>
    <div className="flex justify-start gap-3 " >
            {colors.map((item) => 
              <div className="" key={item.id} >
                <ColorCard   color={item.color} onClick={HandleBorder} id={item.id} activeIndex={activeIndex} />

              </div>
            )}
    </div> 
  </div>

  <AddToCard />


  <div className="bg-[#F4E6D2] text-[#624C3C]  justify-start mt-5 rounded-full relative inline-block  h-8 items-center">
  <div className="flex items-center"> {/* Added flex class and items-center for horizontal alignment */}
    <p className="text-[#624C3C] text-[14px] ml-2">The sizes in our videos are 10 inches and 14 inches</p>
    <Link href="/">
      <p className="text-[14px] text-[#624C3C] underline ml-2 pr-5">Learn more</p> {/* Added ml-2 for margin */}
    </Link>
  </div>
</div>



    </div>
  );
};

export default Right;
