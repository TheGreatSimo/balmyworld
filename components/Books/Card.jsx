import React from 'react';

const Card = ({ imageText, buttonText, number }) => {
  const handleButton = () => {
    alert("Not connected to any store yet ");
  };

  return (
    <div style={{ position: 'relative' }}>
      <h1
        className='text-[120px] font-architects-daughter text-center'
        style={{ zIndex: '1', position: 'absolute',  width: '100%', top: '-60px', left: '50%', transform: 'translateX(-50%)'}}
      >
        {number}
      </h1>
      <div className='w-[281px] h-[418px] bg-[#F8F7F4] flex rounded-2xl relative flex-col items-center' style={{ marginTop: '50px'}}>
        <p className='text-[20px] text-black font-serif font-semibold text-center mt-4'>Popular Songs</p>
        <div className='bg-[#BDB8A8] w-[240px] h-[136px] border-1 border-[#414141] rounded-lg border-[1px] flex justify-center items-center mt-4'>
          <p className='text-[#656257]'>{imageText}</p>
        </div>
        <p className='text-[16px] w-[240px] h-[72px] mt-4'>
          60 extra songs hardcover book comes free! And how-to guide included!
        </p>
        <button
          onClick={handleButton}
          className='w-[240px] h-[60px] bg-[#FFD271] text-[#222222] text-[16px] rounded-xl font-serif font-medium border-[0.2px] border-[#222222] mt-10 font-medium'
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
