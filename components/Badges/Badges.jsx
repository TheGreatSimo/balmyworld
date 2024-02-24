import Image from 'next/image'

const Badges = () => {
  return (
    <div className="h-[300px] w-full bg-[#F0EBDD] flex justify-evenly items-center " >

      <div className='flex justify-center flex-col items-center gap-2  '>
        <Image src="/plane.png" width={76} height={76} alt="plane image" />
        <p className='text-[24px] font-serif text-[#353535] font-semibold '>Worldwide Shipping</p>
        <p className='text-[#353535] text-[16px]' >Free For Orders over $69!</p>
      </div>

      <div className='flex justify-center flex-col items-center gap-2  '>
        <Image src="/like.png" width={72} height={72} alt="plane image" />
        <p className='text-[24px] font-serif text-[#353535] font-semibold '>Unbeatable Warranty</p>
        <p className='text-[#353535] text-[16px]' >For the Whole 30 Days!</p>
      </div>

      <div className='flex justify-center flex-col items-center gap-1  '>
        <Image src="/card.png" width={78} height={78} alt="plane image" />
        <p className='text-[24px] font-serif text-[#353535] font-semibold '>Safe & Secure Checkout</p>
        <p className='text-[#353535] text-[16px]' >256-Bit SSL Encryption!</p>
      </div>

    </div>
  )
}

export default Badges