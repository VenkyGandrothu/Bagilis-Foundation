import React from 'react';
import "../Styles/Community.css";
import com1 from '../Images/comm1.jpg';
import com2 from '../Images/comm2.jpg';
import com3 from '../Images/comm3.jpg';
import com4 from '../Images/comm4.jpg';
import com5 from '../Images/comm5.jpg';
import com6 from '../Images/comm6.jpg';

function Community() {
  return (
    <div className="community-container">
      <div className="headingcontainer">
        <h1 className="heading">Program: Corona</h1>
      </div>
      <div className="image-grid">
        <div className="image-container"><img src={com1} alt="Community Image 1" className="gallery-img" /></div>
        <div className="image-container"><img src={com2} alt="Community Image 2" className="gallery-img" /></div>
        <div className="image-container"><img src={com3} alt="Community Image 3" className="gallery-img" /></div>
        <div className="image-container"><img src={com4} alt="Community Image 4" className="gallery-img" /></div>
        <div className="image-container"><img src={com5} alt="Community Image 5" className="gallery-img" /></div>
        <div className="image-container"><img src={com6} alt="Community Image 6" className="gallery-img" /></div>
      </div>
      <p className='telugu text'>కరోణ వైరస్ వ్యాప్తి సమయంలో భౌతిక దూరం పాటించి కరోణాకు దూరంగా ఉండాలని అవగాహన కల్పించడం జరిగింది. అందుకు గాను దుకాణాల వద్ద ముగ్గుపోసి ఎంత దూరంగా ఉండాలనేది చూపడం జరిగింది. అంతే కాకుండా డైలీ కార్మికులకు, అడ్డ కూలీలకు నిత్యావసర సరుకులను పంపిణ చేయడం జరిగింది.  ప్రతి ఒక్కరు వ్యక్తి గత శుబ్రతతో పాటు పరిసరాల శుబ్రత పాటించాలని, ప్లాస్టిక్ వినియోగాన్ని మానివేయాలని అవగాహన కల్పించడంతో ప్లాస్టిక్ వాడడం వలన కలుగు నష్టాల గురించి అవగాహన కల్పించడం జరిగింది.</p>
      <div className="homebtn">
          <button>Home</button>
        </div>
    </div>
  );
}

export default Community;
