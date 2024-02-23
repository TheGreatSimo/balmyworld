import FAQOne from "./FAQOne";
import { FAQ1 } from "@/constants";

const Right = () => {
  return (
    <div>
      <p className=" ml-14 mt-20 text-[#353535] text-[24px] font-architects-daughter ">Save your money</p>
      <h1 className="text-[#222222] font-serif text-[50px] " >
        Big 
        <div className="relative inline-block">
          <div style={{ borderBottom: "24px solid #FFD271" }} className="absolute bottom-4 left-0 w-full rounded-xl z-1 opacity-50 "></div>
          <h1 className="font-serif text-[50px] z-10 text-[#222222] ml-2 mr-2 relative">New Year Sale</h1>
        </div>
        is Here!
      </h1>
      <p className="text-[20px] text-[#353535] font-medium ">Within a few days, our prices will return to their original amounts.</p>


      <div className="mt-10 flex-col gap-8" >
        {FAQ1.map((item) => 
          <div className="mb-6" key={item.id} >
            <FAQOne question={item.question} answer={item.answer} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Right;
