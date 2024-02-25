import React from 'react'
import Image from 'next/image'

const BottomFooter = () => {
  return (
    <div className='h-[60px] bg-[#F0EBDD] flex justify-around items-center'>
      <div><p className='text[#353535] text-[15px] '>Copyright © 2024 Balmy Drum</p></div>
      <div>
        <Image src="/payment.png" width={425} height={24} />
      </div>
      

    </div>
  )
}

export default BottomFooter