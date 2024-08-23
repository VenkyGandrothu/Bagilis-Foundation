import React from 'react';
import '../Styles/Footer.css';
import instagramIcon from '../Images/insta.png';
import facebook from '../Images/fb.png';
import twitterIcon from '../Images/x.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Bagili's Foundation</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti necessitatibus, repellendus possimus nemo ut voluptas voluptatum libero dolorem temporibus, distinctio quasi molestiae, delectus repellat doloribus perspiciatis et molestias officia quas.
          </p>
        </div>
        <div className="footer-section social">
          <h4 className='followus'>Follow Us</h4>
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
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:info@cloprosys.com">@gmail.com</a></p>
          <p>Phone: +91 0000000000</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bagili's Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
