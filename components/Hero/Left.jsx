"use client"


import React, { useState } from 'react';
import Image from 'next/image'
import { product_img } from '@/constants'

const Left = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (index) => {
    if (selectedItem === index) {
      setSelectedItem(null); // Deselect if already selected
    } else {
      setSelectedItem(index); // Select if not selected
    }
  };


  return (
    <div className="relative">

    <Image className='rounded-lg' src="/Product_0.png" width={690} height={530} alt="product image" />

    <div className='flex justify-center flex-wrap gap-3 mt-4'>
        {product_img.map((item, index) => (
          <div key={item.id} className={`relative rounded-xl ${selectedItem === index ? 'border-2 border-gray-400' : ''}`}>
            <Image
              className='max-md:w-10'
              src={item.image}
              width={100}
              height={100}
              onClick={() => handleImageClick(index)}
            />
            {selectedItem === index && <div className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none"></div>}
          </div>
        ))}
    </div>


      <div className='flex justify-center gap-4 mt-8'>
        <div className="flex rounded-xl bg-[#F0EDE6] w-[48%] justify-center flex-col">
          <ul className="flex flex-col ml-7  items-start">
            <li className='flex items-center mt-2'>
              <Image src="/frame_music.png" width={16} height={16} alt="music" />
              <span className='text-[#353535] ml-2'>A magical sound meditation</span>
            </li>

            <li className='flex items-center mt-2'>
              <Image src="/frame_drift.png" className='' width={16} height={16} alt="music" />
              <span className='text-[#353535] ml-2'>Drift off into happiness in no time</span>
            </li>

            <li className='flex items-center mt-2'>
              <Image src="/frame_vector.png" className='' width={16} height={16} alt="music" />
              <span className='text-[#353535] ml-2'>Mysterious personal therapist</span>
            </li>

            <li className='flex items-center mt-2'>
              <Image src="/frame_heart.png" className='' width={16} height={16} alt="music" />
              <span className='text-[#353535] ml-2'>Settles mind and relaxes body</span>
            </li>
          </ul>
        </div>

        <div className="flex rounded-xl bg-[#F0EDE6] w-[48%] justify-center flex-col">
          <ul className="flex flex-col ml-7  items-start">

              <li className='flex items-center mt-1 '>
                <Image src="/frame_money.png" className='' width={16} height={16} alt="music" />
                <span className='text-[#353535] ml-2' > 30 Days Money-Back Guarantee</span>
              </li>

              <li className='flex items-center mt-2 '>
                <Image src="/frame_shipping.png" className='' width={16} height={16} alt="music" />
                <span className='text-[#353535] ml-2' > Free shipping over $69.</span> 
              </li>

              <li className='flex items-center mt-2 '>
                <Image src="/frame_packaging.png" className='mb-6' width={16} height={16} alt="music" />
                <span className='text-[#353535] ml-2 ' > Your order will be shipped between<br></br>    1-2 days after the purchase.</span>
              </li>
          </ul>
          </div>
      </div>



    </div>
  )
}

export default Left