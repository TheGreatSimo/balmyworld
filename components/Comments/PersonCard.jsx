import Image from 'next/image'
const PersonCard = ({image, name, review,number }) => {
  return (
    <div className="w-[320px]  rounded-xl flex justify-center mt-8 hover:bg-[#F0EBDD] hover:border-2 hover:border-black">
      <div>
            <div className='rounded-full' >

                <div className='flex justify-center' >
                  <Image src={image} width={170} height={170} alt="image profile z-10" />
                </div>

              <div className="flex justify-center z-1 right-10">
                  {number === 5 ? <Image src="/rating.png" width={100} height={25} alt="stars" className='' /> : number === 4 ? <Image src="/forstars.png" width={100} height={25} alt="stars" className='' /> :  '' }
              </div>

              <div className='flex justify-center gap-2'>
                <p className='font-serif text-[24px] text-[#353535] font-semibold  '>{name}</p>
                <div className='w-[19px] h-[19px] mt-2' >
                  <Image src="/check.png" width={19} height={19} />
                </div>
              </div>
            </div>
          <div>
            <p className='w-[320px] text-[#353535] text-[16px] text-center' >Who knew this thing would make my singing bowls jealous? This little gem has become my favorite way to unwind, and it's way more fun to play than those bowls!</p>
          </div>
      </div>



    </div>
  )
}

export default PersonCard