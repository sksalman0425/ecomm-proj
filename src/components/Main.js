import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);

  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <div>
   
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
   
      <div className='product-container'>
        { 
         data.map((item)=><div key={item.id} className='product-item'>
          <img src={item.photo} alt=""/>
          <div>Name : {item.name}</div>
          <div>color : {item.color}</div>
          <div>Brand : {item.brand}</div>
          <div>Price : {item.price}</div>
          <div>Category : {item.category}</div>
         <div>
          <button onClick={() => dispatch(addToCart(item))}> Add To Cart</button>
          <button onClick={() => dispatch(removeToCart(item.id))}>Remove To Cart</button>
         </div>
         </div> ) 
        }
      </div>
    </div>
  );
}

export default Main;