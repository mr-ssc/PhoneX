import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About</h3>
          <p>
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha, Kerala, 688006
          </p>
          <p>Phone: 0471 272 0261</p>
          <p>Email: store@jsdev.com</p>
        </div>

        {/* Categories Section */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Headphones</li>
            <li>Smart Watches</li>
            <li>Bluetooth Speakers</li>
            <li>Wireless Earbuds</li>
            <li>Home Theatre</li>
            <li>Projectors</li>
          </ul>
        </div>

        {/* Pages Section */}
        <div className="footer-section">
          <h3>Pages</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Returns</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 SSC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;