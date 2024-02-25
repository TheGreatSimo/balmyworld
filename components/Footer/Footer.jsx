"use client"

import BottomFooter from "./BottomFooter"
import Image from 'next/image'

const Footer = () => {
  const handleClick = () => {
    alert("Not connected to any store yet ")
  }
  return (
    <div>
      <div id="footer" className="flex justify-evenly my-20">
        <div className="flex flex-col" >
          <Image  src="/logo.png" width={200} height={50} alt="loto"/>
          <p className="text-[#353535] w-[345px] mt-4 text-[18px]  ">You are just one "Balmy" away from finding your inner peace</p>
        </div>

        <div className="flex flex-col" >
          <h1 className="text-[#22222] text-[22px] font-serif font-medium" >Business Hours:</h1>
          <p className="text-[16px] text-[#353535] mt-1 mb-4">09:00 AM - 04:00 PM PST</p>
          <h1 className="text-[20px] text-[#353535] font-serif font-medium ">Drop a message</h1>
          <p>support@balmydrum.com</p>
        </div>

        <div className="flex flex-col   " >
          <p className="text-[22px] text-[#222222] font-medium mb-4 cursor-pointer ">Quick Links</p>
          <p className="text-[#353535] text-[16px] mt-2 cursor-pointer "  >Contact Us</p>
          <p className="text-[#353535] text-[16px] mt-2 cursor-pointer " >Track Your Order </p> 
          <p className="text-[#353535] text-[16px] mt-2 cursor-pointer " > Shipping Policy</p> 
          <p className="text-[#353535] text-[16px] mt-2 cursor-pointer " > Privacy Policy</p> 
          <p className="text-[#353535] text-[16px] mt-2 cursor-pointer " >Terms of Service </p>
          <p className="text-[#353535] text-[16px] mt-2 cursor-pointer " > Refund Policy</p>
        </div>



        <div className="flex flex-col" >
          <h1 className="font-serif text-[22px] text-[#222222] font-medium " >Subscribe to our newsletter</h1>
          <div>
            <input placeholder="Type your e-mail address" className="w-[320px] text-center mt-6 h-[60px] bg-[#F0EBDD] rounded-xl border-[1px] border-gray-900 placeholder:text-center"></input>
          </div>
          <div>
            <button onClick={handleClick}  className="w-[320px] h-[60px] bg-[#FFD271] mt-4 rounded-xl border-[1px] text-[#353535] border-gray-900  font-serif font-semibold text-[20px] ">Subscribe</button>
          </div>
        </div>

      </div>
      <BottomFooter />
    </div>
  )
}

export default Footer