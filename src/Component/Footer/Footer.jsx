import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - About */}
        <div className="footer-section">
          <h2>VisaBoard</h2>
          <p>
            Connecting you with reliable local agents for all your travel abroad needs.
          </p>
          <div className="social-icons">
            <span>🔗 Instagram</span>
            <span>🔗 Facebook</span>
            <span>🔗 X</span>
          </div>
        </div>

        {/* Middle Section - Popular Categories */}
        <div className="footer-section">
          <h4>Popular Categories</h4>
          <ul>
            <li>Visa Services</li>
            <li>Admission Services</li>
            <li>Insurance Services</li>
            <li>Travel and Tourism</li>
            <li>Special Services</li>
          </ul>
        </div>

        {/* Right Section - Company */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Press & Announcements</li>
            <li>Careers at VisaBoard</li>
            <li>Contact Us</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© All rights reserved. Made by Quickassist Online Services Pvt. Ltd.</p>
        <div className="payment-methods">
          <span>VISA</span>
          <span>MasterCard</span>
          <span>PayPal</span>
          <span>GPay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  