import { useSelector } from "react-redux";
import cart from "../images/cart.png"

const Header=()=>{
    const result = useSelector((state)=>state.cartData);
    console.warn("data in header", result);
    return(
    <div className="header">
        <div className="cart-div">
        <span>{result.length}</span>
            <img src={cart} alt=""/>

        </div>
    </div>
    )
}
export default Header;


