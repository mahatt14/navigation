import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {
  const slides = [
    {
      url: 'https://cdn.pixabay.com/photo/2021/11/01/02/05/camera-6759179_640.jpg',
      title: 'Camera',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2022/05/02/14/28/smartphone-7169689_640.jpg',
      title: 'Iphone',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2016/11/18/13/53/black-1834689_640.jpg',
      title: 'Headphone',
    },
    {
      url: 'https://media.istockphoto.com/id/1278092809/vector/eyeglasses-for-vision-isometric-vector-illustration.jpg?s=612x612&w=0&k=20&c=zs31bEWtJiD9kbnsdjV_NEaGpS5TmocQA2o6Vn_YIJU=',
      title: 'glasses',
    },
    {
        url: 'https://cdn.pixabay.com/photo/2016/04/30/02/54/panerai-watches-1362344_640.jpg',
        title: 'Smart watch',
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[680px] w-full m-auto py-16 px-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;