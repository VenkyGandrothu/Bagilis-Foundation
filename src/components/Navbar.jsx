import React, { useState, useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/Navbar.css';
import logo from '../Images/Bagilis transparent.png';
import facebook from '../Images/fb.png';
import twitterIcon from '../Images/x.png';
import instagramIcon from '../Images/insta.png';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {


  const navigation = useNavigate();

  const openEvent = () =>{
      navigation('/events')
  }


  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    if (isMobile) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobile]);

  return (
    <nav className="navcontainer" ref={navRef}>
      <div className="navbar-logo">
        <img src={logo} alt="Bagilis Logo" />
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><Link to='index' spy={true} smooth={true} offset={-50} duration={200} onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to='aboutus' spy={true} smooth={true} offset={-50} duration={200} onClick={closeMobileMenu}>About us</Link></li>
        <li><Link to='ruralemployment' spy={true} smooth={true} offset={-50} duration={200} onClick={closeMobileMenu}>Rural employment</Link></li>
        <li><Link to='socialactivities' spy={true} smooth={true} offset={-50} duration={200} onClick={closeMobileMenu}>Social Activities</Link></li>
        <li><Link to='gallery' spy={true} smooth={true} offset={-50} duration={200} onClick={closeMobileMenu}>Gallery</Link></li>
        <li><Link to='contactus' spy={true} smooth={true} offset={-50} duration={200} onClick={closeMobileMenu}>Contact us</Link></li>
        <li onClick={openEvent} className='Events'><a>Events</a></li>
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
