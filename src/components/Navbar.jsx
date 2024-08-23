import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/Navbar.css';
import logo from '../Images/Bagilis transparent.png';
import facebook from '../Images/fb.png';
import twitterIcon from '../Images/x.png';
import instagramIcon from '../Images/insta.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navcontainer">
      <div className="navbar-logo">
        <img src={logo} alt="Bagilis Logo" />
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><Link to='index' spy={true} smooth={true} offset={-50} duration={200}>Home</Link></li>
        <li><Link to='aboutus' spy={true} smooth={true} offset={-50} duration={200}>About us</Link></li>
        <li><Link to='ruralemployment' spy={true} smooth={true} offset={-50} duration={200}>Rural employment</Link></li>
        <li><Link to='socialactivities' spy={true} smooth={true} offset={-50} duration={200}>Social Activities</Link></li>
        <li><Link to='gallery' spy={true} smooth={true} offset={-50} duration={200}>Gallery</Link></li>
        {/* <li><a href="#vision">Our Vision</a></li> */}
        <li><Link to='contactus' spy={true} smooth={true} offset={-50} duration={200}>Contact us</Link></li>
        <div className="navbarlink">
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </ul>
      <button 
        className="mobile-menu-icon" 
        onClick={toggleMobileMenu} 
        aria-label={isMobile ? "Close menu" : "Open menu"}
      >
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
