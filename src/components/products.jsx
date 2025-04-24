import { dummyProducts } from "../twoBrothers.js";
import { FaIndianRupeeSign, FaRegHeart } from "react-icons/fa6";

export default function Products() {
  return (
    <>
      <div className="products-container">
        {dummyProducts.map((product) => (
          <div className="img-div" key={product.id}>
            <img className="" src={product.image}></img>
            <div className="save-label-main-div">
              <div className="label-div">
                <p>Save 6%</p>
              </div>
            </div>
            <div className="best-seller-div">
              <div className="best-seller-text">
                <label>Best Seller</label>
              </div>
              <div className="best-seller-icon-div">
                <FaRegHeart className="best-seller-icon" />
              </div>
            </div>
            <div>
              <p>{product.productName}</p>
              <div className="quan-review-div">
                <div className="savings-container">
                  <div>
                    <p className="savings-text-wrapper">
                      {product.savingsText}
                    </p>
                  </div>
                  <div className="savings-wrapper">
                    <p className="savings-sign-wrapper">
                      <FaIndianRupeeSign />
                    </p>
                    <p className="savings-amount-wrapper">
                      {product.savingsAmount}
                    </p>
                  </div>
                </div>
                <div className="quantity-container">
                  <select className="quantity-wrapper" key={product.id}>
                    <option value={product.productQuantity}>
                      {product.productQuantity}
                    </option>
                  </select>
                </div>
                <div>
                  <p>{product.rating}</p>
                  <p className="review-wrapper">{product.review}</p>
                </div>
              </div>
              <div className="price-add-div">
                <div className="price-sign-container">
                  <p>
                    <FaIndianRupeeSign />
                  </p>
                  <p className="price-container">{product.price}</p>
                </div>
                <div className="add-button-div">
                  <button className="add-button">{product.addButton}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
