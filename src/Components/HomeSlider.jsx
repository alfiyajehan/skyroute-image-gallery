import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HomeSlider.css';
import Insta from './Insta'

const HomeSlider = ({ imgs }) => {
  return (
    <div className="w-full h-screen mb-[-15%] flex items-center justify-center bg-black">
      <div className="w-full max-w-6xl h-[55vh] absolute top-[28%] overflow-hidden rounded-[3px]">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {imgs.map((img) => (
            <SwiperSlide 
            key={img.id}>
              <img
                src={img.src}
                alt={`Slide ${img.id}`}
                className=" w-full h-[70vh] object-cover"
                style={{ objectPosition: 'top -2%' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Insta>Visit our Instagram profile form more</Insta>
    </div>
  );
};

export default HomeSlider;
