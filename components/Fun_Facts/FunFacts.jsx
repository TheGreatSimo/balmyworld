"use client"
import Image from 'next/image'


const FunFacts = () => {
  const handleButton = () => {
    alert("Not connected to any store yet ")
  }
  return (
    <div className="flex justify-center mt-20 ">
        <div className="flex justify-between  w-[80%] h-[536px]" >
        <div className="flex-col" >
          <h1 className="text-[#222222] w-[365px] font-serif text-[60px] font-semibold mb-4 " >We Asked Our Customers</h1>
          <div className="relative inline-block">
            <div style={{ borderBottom: "24px solid #FFD271" }} className="absolute bottom-[-1px] left-0 w-full rounded-xl z-1 opacity-40 "></div>
            <p className="font-serif text-[24px] z-10 text-[#353535] ml-2 mr-2  relative"> About What they liked most about Balmy.</p>
          </div>
          <p className="mt-4 ml-2 text-[16px] text-[#353535] w-[550px] font-medium "> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          <button onClick={handleButton} className="bg-[#FFD271] mt-10  ml-2 w-[310px] h-[70px] rounded-lg text-[20px] font-semibold font-serif text-[#222222] border-[1px] border-[#414141] ">View All Reviews</button>

        </div>


        <div className="" >
          <Image src="/boxes.png" width={536} height={536} alt="boxes image" />

        </div>
      </div>
    </div>
  )
}

export default FunFacts