"use client"

import Image from 'next/image'


const Sale = () => {
  const handleClick = () => {
    alert("Not connected to any store yet ")
  }
  return (
    <div className="bg-[#FFD271] h-[612px] flex flex-col  items-center justify-center relative">
      <div>
        <div className='flex justify-center items-center'>
          <Image className=' ml-16 ' src="/tree.png" width={100} height={100} alt="tree image" />
          <p className=' font-architects-daughter ' >Happy <br></br>Chrismas! </p>
        </div>
        <div className="w-[376px] bg-[#F8F7F4] h-[57px] rounded-xl border-[#414141] border-[1px] flex items-center justify-center" >
          <p className="text-center text-[30px] font-serif text-[#222222] font-medium " >Big New Year Sale here!</p>
        </div>
      </div>
      <h1 className="text-[80px] font-serif font-semibold mt-2">UP TO <span className="text-[#D54A37]" >60% </span> OFF.</h1>
      <div>
        <button onClick={handleClick}  className="w-[310px] mt-4 h-[70px] bg-[#F8F7F4] border-[#414141] border-[1px] rounded-xl text-[20px] text-[#222222] "> Choose Your Balmy Now!</button>
      </div>
      <p className="w-[340px] text-[18px] text-[#222222] text-center mt-8" >DON'T MISS out on our BIGGEST SALE we will ever have</p>
    </div>
  )
}

export default Sale