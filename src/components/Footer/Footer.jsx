import "./Footer.css";


export default function Footer() {
  return (
    <footer>
      <div className="footer-grid-container">
        <div className="footer-grid-container-item__1">
          <h1>Nirvikara</h1>
        </div>
        <div className="footer-grid-container-item__2 items">
          <h4>Nirvikara</h4>
          <ul className="footer-list">
            <li>About us</li>
            <li>Conditions</li>
            <li>Our Journals</li>
            <li>Careers</li>
            <li>Afiliate Programme</li>
            <li>Ultras Press</li>
          </ul>
        </div>
        <div className="footer-grid-container-item__3 items">
          <h4>Quick Links</h4>
          <ul className="footer-list">
            <li>Offers</li>
            <li>Discount Coupons</li>
            <li>Stores</li>
            <li>Track Order</li>
            <li>Shop</li>
            <li>Info</li>
          </ul>
        </div>
        <div className="footer-grid-container-item__4 items">
          <h4>Customer Service</h4>
          <ul className="footer-list">
            <li>FAQ</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Returns & Refunds</li>
            <li>Cookie Guidelines</li>
            <li>Delivery Information</li>
          </ul>
        </div>
        <div className="footer-grid-container-item__5 item items">
          <h4>Subscribe Us</h4>
          <ul className="footer-list">
            <li>
              Subscribe to our newletter to get updates about our grand Offers
            </li>
            <li className="newsletter">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              <button>Subscribe</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
