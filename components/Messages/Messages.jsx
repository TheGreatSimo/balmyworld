"use client"
import Image from 'next/image'

const Messages = () => {
  const handleButton = () => {
    alert("Not connected to any store yet ")
  }
  return (
    <div className="bg-[#F0EBDD] w-full h-[722px] flex justify-center mt-20">
      <div className="flex justify-between w-[80%] h-[536px] mt-20" >

        <div className="" >
          <Image src="/App.png" width={611} height={502} alt="app image" />
        </div>


        <div className="flex-col" >


          <div className="relative inline-block">
            <h1 className="text-[#222222] w-[400px]   font-serif text-[60px] font-semibold" >Your </h1>
            <div style={{ borderBottom: "24px solid #FFD271" }} className="absolute bottom-[8px] left-0 w-full rounded-xl z-1 opacity-60 "></div>
            <h1 className="font-serif text-[50px] z-10 text-[#353535] font-semibold ml-2 mr-2  relative"> Magical Therapist</h1>
          </div>

            <p className="font-serif text-[20px] w-[434px] z-10 text-[#353535]  mr-2  mt-8 relative"> You are just one "Balmy" away from finding your inner peace.</p>
            <p className="mt-4  text-[16px] text-[#353535] w-[550px] font-medium "> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <button onClick={handleButton} className="bg-[#FFD271] mt-10   w-[310px] h-[70px] rounded-xl text-[20px] font-semibold font-serif text-[#222222] border-[1px] border-[#414141] ">View All Reviews</button>


        </div>


      </div>

    </div>
  )
}

export default Messages