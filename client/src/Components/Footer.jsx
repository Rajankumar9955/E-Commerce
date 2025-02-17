
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../Css/Footer.css"


const Footer=()=>{
    return(
        <>
        <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Reminder</h3>
          <p>Your trusted marketplace for Daily uses products, ensuring quality and affordability for users.</p>
          <p>📍 Bhopal, India</p>
          <p>📞 +91 9955236973</p>
          <p>📧 krajan92946@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
          <li><a href="#">FAQ</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Subscribe</h3>
          <p>Get updates on new products and offers.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

     
      <div className="footer-bottom">
        © {new Date().getFullYear()} REMINDER. All rights reserved.
      </div>
        </div>
        </>
    )
}
export default Footer