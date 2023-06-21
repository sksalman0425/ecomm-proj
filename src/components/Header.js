import { useSelector, useDispatch } from "react-redux";
import cart from "../images/cart.png";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.warn("data in header", result);
  return (
    <div className="header">
      <div className="search-box">
        <input
          type="text"
          onChange={(event) => dispatch(productSearch(event.target.value))}
          placeholder="Search Product"
        />
      </div>
      <div className="cart-div">
        <Link to="/cart">
          <span>{result.length}</span>
          <img src={cart} alt="" />
        </Link>
      </div>
      <div className="cart-div" style={{ margin: "30px" }}>
        <Link to="/cart">Go To Cart</Link>
      </div>
    </div>
  );
};
export default Header;
