// import navbarIcon from "../assets/navigation-bar.png";
// import shoppingBagIcon from "../assets/shopping-bag.png";
// import wishlistIcon from "../assets/love.png";
// import memberIcon from "../assets/user.png";
// import jaggery from "../assets/Jaggery.png";
import Agrofarm from "../assets/Agrofarm.png";
import Dropdown from "./Dropdown/Dropdown.jsx";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaBars,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="header-main-div">
        <div className="header-wrapper">
          <div className="contact-wrapper">
            <div className="mail-wrapper">
              <p>
                <span className="icon">
                  <FaEnvelope />
                </span>
                <span>example@example.com</span>
              </p>
            </div>
            <div className="address-wrapper">
              <p>
                <span className="icon">
                  <FaMapMarkerAlt />
                </span>
                <span>1st Floor, New World</span>
              </p>
            </div>
            <div className="phone-wrapper">
              <p>
                <span className="icon">
                  <FaPhone />
                </span>
                <span>+91 0000000000</span>
              </p>
            </div>
          </div>
          <div className="follow-us-wrapper">
            <p>
              <span>Follow Us</span>
              <span className="icon">
                <FaTwitter />
              </span>
              <span className="icon">
                <FaFacebookF />
              </span>
              <span className="icon">
                <FaInstagram />
              </span>
              <span className="icon">
                <FaPinterestP />
              </span>
            </p>
          </div>
          <div className="get-a-quote-wrapper">
            <div className="get-a-quote">
              <span>GET A QUOTE</span>
            </div>
          </div>
        </div>
        <div className="navigation-bar">
          <div className="logo-wrapper">
            <div className="logo-div">
              <img
                className="logo"
                src="https://www.gheewala.com/wp-content/uploads/2020/08/logo.png"
                alt="logo"
              />
            </div>
            <div className="navigation-item-wrapper">
              <span className="navigation-item">
                <Link to="/">Nirvikara</Link>
              </span>
            </div>
            <div className="navigation-item-wrapper">
              <span className="menu-icon">
                <Link to="/menu">
                  <FaBars />
                </Link>
              </span>
            </div>
            <Dropdown />
          </div>
          <div className="navigation-wrapper">
            <ul className="navigation-list">
              <li className="navigation-item">
                <Link to="/home">HOME</Link>
              </li>
              <li className="navigation-item">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="navigation-item">
                <Link to="/service">SERVICE</Link>
              </li>
              <li className="navigation-item">
                <Link to="/gallery">GALLERY</Link>
              </li>
              <li className="navigation-item">
                <Link to="/blog">BLOG</Link>
              </li>
              <li className="navigation-item">
                <Link to="/contact">CONTACT</Link>
              </li>
              <li className="navigation-item">
                <Link to="/search">
                  <FaSearch />
                </Link>
              </li>
            </ul>
          </div>
          {/* <input type="text" placeholder="Search For Ghee" name="search" /> */}
        </div>
      </div>
      <div>
        <img className="header-body-div" src={Agrofarm} alt="Agrofarm"></img>
      </div>
    </>
  );
}
