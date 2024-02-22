"use client"
import { useState } from "react";

const AddToCard = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCard = () => {
    alert("Not connected to any store yet ")
  }
  return (
    <div className=" mt-8 rounded-full bg-[#FFD271] w-[404px] h-[70px] flex justify-between   items-center relative  cursor-pointer " >
      <div className="bg-[#FFF1CC] w-[160px] h-[50px] rounded-full ml-2 relative flex  items-center justify-around">
        <button onClick={decrementQuantity} className=" text-[25px] " >-</button>
        <p className="text-[20px]" >{quantity}</p>
        <button onClick={incrementQuantity}  className="text-[25px]" >+</button>

      </div>
      <div onClick={handleAddToCard} className="w-[50%]" ><p className="text-[25px] font-serif text-[#222222] mr-12 " >Add To Card</p></div>

    </div>
  )
}

export default AddToCard