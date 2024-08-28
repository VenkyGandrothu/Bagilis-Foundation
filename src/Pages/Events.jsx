import React, { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner'; // Import the Oval spinner
import '../Styles/Events.css'; // Ensure correct path
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 
import comm1 from '../Images/comm1.jpg';
import comm2 from '../Images/comm2.jpg';
import comm3 from '../Images/comm3.jpg';
import comm4 from '../Images/comm4.jpg';
import comm5 from '../Images/comm5.jpg';
import comm6 from '../Images/comm6.jpg';
import comm7 from '../Images/comm7.jpg';
import p0214 from '../Images/plastic2.jpg';
import p0314 from '../Images/plastic3.jpg';
import p0414 from '../Images/plastic4.jpg';
import p0514 from '../Images/plastic5.jpg';
import p0614 from '../Images/plastic6.jpg';
import p0714 from '../Images/plastic7.jpg';
import p0814 from '../Images/plastic8.jpg';
import p0119 from '../Images/gen1.jpg';
import p0219 from '../Images/gen2.jpg';
import p0319 from '../Images/gen3.jpg';
import p0419 from '../Images/gen4.jpg';
import p0519 from '../Images/gen5.jpg';
import p0619 from '../Images/gen6.jpg';
import p0719 from '../Images/gen7.jpg';
import p0819 from '../Images/gen8.jpg';
import p0919 from '../Images/gen9.jpg';
import p1019 from '../Images/gen10.jpg';

function Events() {
  const [loading, setLoading] = useState(true);
  const navi = useNavigate();

  const backtohome = () => {
    navi('/Bagilis-Foundation');
  };

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 2000); // Adjust timeout as needed
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <Oval
          height={80}
          width={80}
          color="#ff6f61"
          ariaLabel="oval-loading"
          secondaryColor="#f3f3f3"
          strokeWidth={2}
          strokeWidthSecondary={2}
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="eventcontainer">
      <h1>Events in <span>Bagili's</span></h1>

      {/* Plastic Ban Event Section */}
      <div className="event-section">
        <h3><span>Program-1:</span> Plastic ban (01/2014 - 08/2014)</h3>
        <div className="image-grid">
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
        <SwiperSlide><img src={p0214} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={p0314} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={p0414} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={p0514} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={p0614} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={p0714} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={p0814} alt="Slide 1" /></SwiperSlide>
      </Swiper>
        </div>
        <div className="event-description">
          <p>100% ప్లాస్టిక్ బ్యాన్ చేయాలని కోరుతూ ఇంటింటి ప్రచారం నిర్వహించడం జరిగింది. ప్రతి ఒక్కరి వద్దకు వెళ్లి ప్లాస్టిక్ వల్ల భవిష్యత్లో కలిగే నష్టాలను వివరించడం జరిగింది. పాంప్లేట్స్ ద్వారా అవగాహణ కల్పించడం జరిగింది.  గ్రామంలోని ప్రతి దుకాణ దారుడికి ప్లాస్టిక్ కవర్లు విక్రయించవద్దని విన్నవించడం జరిగింది. అంతే కాకుండా అప్పటి మంత్రి వర్యులు శ్రీమతి వాకిటి సునితారెడ్డి గారిని కలిసి గ్రామాల్లో 100 శాతం ప్లాస్టిక్ నిషేధం అయ్యేలా చర్యలు తీసుకోవాల్సిందిగా కోరడం జరిగింది. యువతను స్వయం ఉపాదిరంగంలో ఎదిగేందుకు ప్రత్యేక కార్యక్రమాలు చేపట్టాల్సిందిగా అప్పటి ముఖ్యమంత్రి గౌరవ శ్రీ రోశయ్య గారికి కలిసి యువజన సంఘాల తరపున విన్నవించడం జరిగింది. </p>

        </div>
      </div>

      {/* Corona Event Section */}
      <div className="event-section">
        <h3><span>Program-2:</span> Corona</h3>
        <div className="image-grid">
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
        <SwiperSlide><img src={comm1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={comm2} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={comm3} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={comm4} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={comm5} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={comm6} alt="Slide 1" /></SwiperSlide>
        {/* <SwiperSlide><img src={comm7} alt="Slide 1" /></SwiperSlide> */}
      </Swiper>
        </div>
        <div className="event-description">
          <p>కరోణ వైరస్ వ్యాప్తి సమయంలో భౌతిక దూరం పాటించి కరోణాకు దూరంగా ఉండాలని అవగాహన కల్పించడం జరిగింది. అందుకు గాను దుకాణాల వద్ద ముగ్గుపోసి ఎంత దూరంగా ఉండాలనేది చూపడం జరిగింది. అంతే కాకుండా డైలీ కార్మికులకు, అడ్డ కూలీలకు నిత్యావసర సరుకులను పంపిణ చేయడం జరిగింది. ప్రతి ఒక్కరు వ్యక్తి గత శుబ్రతతో పాటు పరిసరాల శుబ్రత పాటించాలని, ప్లాస్టిక్ వినియోగాన్ని మానివేయాలని అవగాహన కల్పించడంతో ప్లాస్టిక్ వాడడం వలన కలుగు నష్టాల గురించి అవగాహన కల్పించడం జరిగింది. ప్రతి ఒక్కరు వ్యక్తి గత శుబ్రతతో పాటు పరిసరాల శుబ్రత పాటించాలని, ప్లాస్టిక్ వినియోగాన్ని మానివేయాలని అవగాహన కల్పించడంతో ప్లాస్టిక్ వాడడం వలన కలుగు నష్టాల గురించి అవగాహన కల్పించడం జరిగింది. </p>
        </div>
      </div>

      {/* General Event Section */}
      <div className="event-section">
        <h3><span>Program-3:</span> General (01/2019 - 09/2019)</h3>
        <div className="image-grid">
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
        {/* <SwiperSlide><img src={p0119} alt="Slide 1" /></SwiperSlide> */}
        <SwiperSlide><img src={p0419} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={p0519} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={p0619} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={p0719} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={p0819} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={p1019} alt="Slide 1" /></SwiperSlide>
      </Swiper>
        </div>
        <div className="event-description">
          <p>ఉపాధి కల్పించుకోవాలని, గ్రామస్థాయిలో కుల బద్ధమైన పద్ధతుల్ని అధిగమించేందుకు అవగాహన కల్పించడం జరిగింది. గ్రామాల్లో జరిగే అభివృద్ధి కార్యక్రమాల్లో పాల్గొనడం జరిగింది. మన హక్కులు, మన బాధ్యతలు దృఢమైన విషయాలు, మన సమస్యలు ఏమిటి, ఏవిధంగా పరిష్కారం చేసుకోవాలి అనే విషయాలపై చర్చ జరిగింది.</p>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="homebtn">
        <button onClick={backtohome}><FaArrowLeft /> Back to Home</button>
      </div>
    </div>
  );
}

export default Events;
