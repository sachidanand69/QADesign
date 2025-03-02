import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>VisaBoard</h2>
          <p>
            Connecting you with reliable local agents for all your travel abroad needs.
          </p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="./src/assets/Images/linkedin.png" alt="LinkedIn" width="34" style={{ verticalAlign: "middle" }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="./src/assets/Images/twit.png" alt="Twitter" width="34" style={{ verticalAlign: "middle" }} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="./src/assets/Images/facebook.png" alt="Facebook" width="34" style={{ verticalAlign: "middle" }} />
            </a>
          </div>
        </div>

        {/*Popular Categories */}
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

        {/*Company */}
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
      {/* Copy write section*/}
      <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
        {/* Left-aligned copyright text */}
        <p style={{ margin: 0, textAlign: "left", flex: "1" }}>
          © All rights reserved. Made by Quickassist Online Services Pvt. Ltd.
        </p>

        {/*logos */}
        <div className="payment-methods" style={{ flex: "1", display: "flex", justifyContent: "flex-start", marginLeft:"30%"}}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <img src="./src/assets/Images/visa.png" alt="Visa" style={{ width: "60px", height: "auto" }} />
            <img src="./src/assets/Images/mastercard.png" alt="MasterCard" style={{ width: "60px", height: "auto" }} />
            <img src="./src/assets/Images/paypal.png" alt="PayPal" style={{ width: "60px", height: "auto" }} />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

