import Image from "next/image";
import Discount from "./Discount";

const Right = () => {
  return (
    <div className="bg-red-100">
      <div className="flex justify-start gap-4">
        <div className="bg-[#FFD271] w-40 rounded-3xl">
          <Image src="/stars.png" width={300} height={100} alt="starts" />
        </div>
        <div className="flex justify-center items-center">
          <h2 className="text-center text-[#222222] mt-3">
            4.9 / 5.0 - 18281 Ratings
          </h2>
        </div>
      </div>

      <h1 className="font-serif text-[#222222] text-[50px] font-medium   ">
        Meet Balmy
      </h1>
      <h2 className=" font-semibold  font-italic ">
        Hand-Crafted, Authecnic Drum
      </h2>
      <p className="font-medium mt-3 text-[#222222]">
        Sound healing, mesmerizing harmonies even without any experience in just
        seconds.
      </p>


      <div className="bg-[#F4E6D2] text-[#624C3C] rounded-2xl flex justify-start mt-5 relative w-[80%] h-8 ">
        <div className="w-25 h-25 justify-end items-end ">
          <Image src="/alert.png" width={15} height={15} alt="alert" />
        </div>
        <div>The sizes in our videos are 10 inches and 14 inches</div>
      </div>

      <Discount number="55" />

      <h1 className="text-[50px] text-[#222222] font-serif " >$139.90 <span className="text-[#AB5555] text-[20px] line-through">$139.90</span></h1>
      <h3 className="text-[#222222] font-semibold serif">Choose Size:</h3>



      <div className="flex  justify-start gap-10  ">


        <div>
          <div className="flex flex-col  shadow-lg rounded-lg justify-center w-[125px] h-[158px]" >
            <div className="flex justify-center">
              <Image src="/drumb.png" width={50} height={50} alt="dumb"/>
            </div>
            <p className="text-[#222222] font-serif text-[20px] text-center  font-medium" >Demo Size</p>
            <p className="text-[#706D65] text-center" >6 inches </p>
          </div> 
        </div>

        <div>
          <div className="flex bg-[#E8E4DA] flex-col  shadow-lg  justify-center w-[132px] h-auto rounded-lg" >
            <div className="bg-yellow-500 h-5  text-[#53482B] font-semibold text-[12px] text-center  rounded-t-md  ">MOST POPULAR</div>
            <div className="flex justify-center">  
              <Image src="/drumb_10.png" width={101} height={101} alt="dumb"/>
            </div>
            <p className="text-[#222222] font-serif text-[20px] text-center  font-medium" >11 Tones</p> 
            <p className="text-[#706D65] text-center" >10 inches </p> 
          </div> 
        </div>

        <div>
          <div className="flex bg-[#E8E4DA] flex-col  shadow-lg  justify-center w-[172px] h-auto rounded-lg" >
            <div className="bg-yellow-500 h-5  text-[#53482B] font-semibold text-[12px] text-center  rounded-t-md  ">BEST VALUE </div>
            <div className="flex justify-center">  
              <Image src="/drumb_10.png" width={141} height={141} alt="dumb"/>
            </div>
            <p className="text-[#222222] font-serif text-[20px] text-center  font-medium" >15 Tones</p> 
            <p className="text-[#706D65] text-center" >14 inches </p> 
          </div> 
        </div>
      </div>


  <div className="relative inline-block">
    <div style={{ borderBottom: "10px solid #F2E5BF" }} className="absolute bottom-2 left-0 w-full  border-yellow-300"></div>
    <p className="font-serif text-2xl relative z-10 text-[#222222]">Compare Sizes+</p>
  </div>



  <div className="mt-10" >
    <p className="text-[#222222] text-[25px] font-serif ">Choose Color:</p>

  </div>



    </div>
  );
};

export default Right;
