import React from 'react';
import '../Styles/Gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import slide1 from '../Images/gal1.jpg';
import slide2 from '../Images/gal2.jpg';
import slide3 from '../Images/gal3.jpg';
import slide4 from '../Images/gal4.jpg';
import slide5 from '../Images/gal5.jpg';
import slide6 from '../Images/gal6.jpg';
import slide7 from '../Images/gal7.jpg';
import slide8 from '../Images/gal8.jpg';

function Gallery() {
  return (
    <div className='gallery-container'>
      <h1 className="heading"><span>Gallery</span></h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className='swiper-container'
      >
        <SwiperSlide><img src={slide1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="Slide 4" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="Slide 5" /></SwiperSlide>
        <SwiperSlide><img src={slide6} alt="Slide 6" /></SwiperSlide>
        <SwiperSlide><img src={slide7} alt="Slide 7" /></SwiperSlide>
        <SwiperSlide><img src={slide8} alt="Slide 8" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Gallery;
