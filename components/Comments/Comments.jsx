"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import PersonCard from './PersonCard'
import { comments } from '@/constants'
import { forstars } from '@/constants'

const Comments = () => {
  const [selectedChoice, setSelectedChoice] = useState(5);

  const handleChoiceChange = (event) => {
    setSelectedChoice(event.target.value);
  };

  return (
    <div className='h-[1500px] w-full flex justify-center items-center'>
      <div  className='w-[1355px] h-[1251px]  mt-40 flex flex-col  relative'>
        <div className='flex justify-center relative'>
        <div className='h-[300px]  w-full flex justify-between '>
          <div className='flex-col' >
            <p className='text-[24px] text-[#353535] font-architects-daughter text-start ml-4' >Customer comments</p>
            <p className='text-[50px] font-serif text-[#222222] font-semibold w-[530px]  ' >Appreciating Our Customers' Experiences</p>


            <div className='flex flex-start items-center gap-4 mt-10 '>
              <label htmlFor="choices" className="text-[20px] text-[#353535]">Filter comments:</label>
              <select id="choices" className='bg-[#F0EBDD] rounded-2xl w-[190px] h-[50px] border-[1px] border-black text-[#353535] text-[20px] '
                value={selectedChoice}
                onChange={handleChoiceChange}
              >
                  <option className='text-center  ' value="5" defaultValue={5}>5 stars </option>
                  <option className='text-center' value="4">4 stars</option>
                  <option className='text-center'  value="3">3 stars</option>
                  <option className='text-center'  value="2">2 stars</option>
                  <option className='text-center'  value="1">1 stars</option>
              </select >
            </div>
          </div>

          <div className='flex' >
            <Image src="/ratings.png" width={350} height={256} alt="rating image" />
          </div>
        </div>  
        </div>


        <div className='flex  mt-10'>

            {/* if selectedChoice==5 then do the below that but if it's equal to 4 do the same things just want instead of comments do forstars  */}
            <div className='flex flex-wrap gap-2 justify-center ' >
                {selectedChoice == 5 ? (
                  comments.map((item) => (
                    <div className='' key={item.id}>
                      <PersonCard name={item.name} image={item.image} review={item.comment} number={5} />
                    </div>
                  ))
                ) : selectedChoice == 4 ? (
                  forstars.map((item, index) => (
                    <div className='' key={index}>
                      <PersonCard name={item.name} image={item.image} review={item.comment} number={4} />
                    </div>
                  ))
                ) : (
                  <div>No reviews available for this choice</div>
                )}
            </div>




        </div>
      </div>
    </div>
  )
}

export default Comments