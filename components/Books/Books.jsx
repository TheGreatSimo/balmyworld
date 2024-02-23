"use client"

import Image from 'next/image'
import Card from './Card'


const Books = () => {

  const handleButton = () => {
    alert("Not connected to any store yet ")
  }

  return (
    <div className="bg-[#F0EBDD] w-full h-[670px] mt-32 flex" >
      <div className='flex-1 inline-block mt-32 ml-40 '>
          <h1 className="text-[#222222] font-serif text-[50px] font-medium text-start " >
          Hardcover Book  
          <Image src="/book.png" width={32} height={32} alt="book" className='ml-10 inline-block' />
          </h1>


          <h1 className='text-[#222222] font-serif  text-[50px] font-medium text-start' >
            <div className="relative inline-block">
              <div style={{ borderBottom: "24px solid #FFD271" }} className="absolute bottom-4 left-0 w-full rounded-xl z-1 opacity-50 "></div>
              <h1 className="font-serif text-[50px] z-10 text-[#222222] ml-2 mr-2 relative"> Comes Free !</h1>
            </div>
            <Image src="/69.png" width={57} height={44} alt='69' className='ml-2 mb-2 inline-block ' />
          </h1>  
          <p className='text-[20px] w-[435px] text-[#353535] h-[90px] mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
          <p className='text-[16px] text-[#353535] w-[435px] h-[90px] mt-6' >The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
          <button onClick={handleButton} className='w-[310px] h-[70px] bg-[#FFD271] text-[#222222] text-[20px] rounded-xl font-serif font-medium border-[0.2px] border-[#222222] mt-10 '>Choose Your Balmy Now!</button>
      </div>

      <div className='flex-2  flex justify-center gap-10 mt-32 mr-20 flex-wrap'>
        <Card  imageText="photo of 15 tones" buttonText="15 Tones (Best Value) " number="60"/>
        <Card  imageText="photo of 11 tones" buttonText="11 Tones (Most Popular)" number="30" />
        <Card  imageText="photo of 6 inches" buttonText="6 Inches (Demo Size)" number="10" />
        
      </div>

    </div>
  )
}

export default Books