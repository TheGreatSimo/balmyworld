"use client"

import React, { useState } from 'react';

const ColorCard = ({color , onClick , activeIndex , id }) => {
  color = color
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {   
    onClick(id)
  };

  return (
    <div>
      <div
        style={{ 'background' : `${color}`}}
        className={` w-[60px] h-[60px] rounded-full cursor-pointer ${
        id === activeIndex  ? 'border-blue-800  border-4' : 'border-gray-300 border-2'
        }`}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default ColorCard;
