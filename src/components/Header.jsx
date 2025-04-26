// import navbarIcon from "../assets/navigation-bar.png";
// import shoppingBagIcon from "../assets/shopping-bag.png";
// import wishlistIcon from "../assets/love.png";
// import memberIcon from "../assets/user.png";
// import jaggery from "../assets/Jaggery.png";
import productsImage from "../assets/productsImage.png";
import { FaHeart, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="header-main-div">
        <div className="header-wrapper">
          <div>
            <button>
              <FaBars />
            </button>
          </div>
          <div className="org-name">
            <div>
              <h2>NIRVIKARA</h2>
            </div>
          </div>
          <div className="header-wrapper">
            <div>
              <button>
                <FaUser />
              </button>
            </div>
            <div>
              <button>
                <FaHeart />
              </button>
            </div>
            <div>
              <button>
                <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
        <div>
          <input type="text" placeholder="Search For Ghee" name="search" />
        </div>
      </div>
      <div>
        <img
          className="header-body-div"
          src={productsImage}
          alt="productsimage"
        ></img>
      </div>
    </>
  );
}
