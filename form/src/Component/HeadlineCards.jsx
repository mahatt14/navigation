import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>High Quality Is The Best</p>
          <p className='px-2'>Through 8/10</p>
          <button className='bg-white hover:bg-orange-600 text-black mx-2 absolute bottom-4 rounded-lg'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://cdn.pixabay.com/photo/2020/05/17/07/38/audio-5180457_640.jpg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Electronics</p>
          <p className='px-2'>Added Daily</p>
          <button className='bg-white hover:bg-orange-600 text-black mx-2 absolute bottom-4 rounded-lg'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://cdn.pixabay.com/photo/2013/09/30/21/58/male-watch-188782_640.jpg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
          <p className='px-2'>Guaranteed warranty</p>
          <button className='bg-white hover:bg-orange-600 text-black mx-2 absolute bottom-4 rounded-lg'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://cdn.pixabay.com/photo/2015/09/09/17/11/bag-931937_640.jpg'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;