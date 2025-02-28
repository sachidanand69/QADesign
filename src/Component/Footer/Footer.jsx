const Footer = () => {
    return (
      <footer style={{ background: '#0d1117', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ marginBottom: '10px' }}>VisaBoard</h2>
            <p style={{ maxWidth: '250px', fontSize: '14px', color: '#bdbdbd' }}>
              Connecting you with reliable local agents for all your travel abroad needs.
            </p>
            <div style={{ marginTop: '10px' }}>
              <span style={{ marginRight: '10px', cursor: 'pointer' }}>🔗 Instagram</span>
              <span style={{ marginRight: '10px', cursor: 'pointer' }}>🔗 Facebook</span>
              <span style={{ cursor: 'pointer' }}>🔗 X</span>
            </div>
          </div>
  
          <div>
            <h4>Popular categories</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#bdbdbd' }}>
              <li>Visa Services</li>
              <li>Admission Services</li>
              <li>Insurance Services</li>
              <li>Travel and Tourism</li>
              <li>Special Services</li>
            </ul>
          </div>
  
          <div>
            <h4>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#bdbdbd' }}>
              <li>About</li>
              <li>Press & Announcements</li>
              <li>Careers at VisaBoard</li>
              <li>Contact us</li>
              <li>Terms of use</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
  
        <div style={{ marginTop: '20px', fontSize: '14px', color: '#bdbdbd'}}>
          <p >© All rights reserved. Made by Quickassist Online Services Pvt. Ltd.</p>
          <div style={{width:"40%",marginRight:'0px'}}>
            <span style={{ marginRight: '10px' }}>VISA</span>
            <span style={{ marginRight: '10px' }}>MasterCard</span>
            <span style={{ marginRight: '10px' }}>PayPal</span>
            <span>GPay</span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  