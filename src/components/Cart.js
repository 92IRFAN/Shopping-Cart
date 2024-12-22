import React from "react";
import "../styles/cart.css";
import useShop from "../Context/ShopContext";

const Cart = () => {
  const { products, removeFromCart, ADD_COUNT, MINUS_COUNT, total } = useShop();
  
  // const [price, setPrice] = useState(0);

  // const handlePrice = ()=>{
  //     let ans = 0;
  //     cart.map((item)=>(
  //         ans += item.amount * item.price
  //     ))
  //     setPrice(ans);
  // }

  // const handleRemove = (id) =>{
  //     const arr = cart.filter((item)=>item.id !== id);
  //     setCart(arr);
  //     // handlePrice();
  // }

  // useEffect(()=>{
  //     handlePrice();
  // })

  const handleClick = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="cart_container">
      <article>
        {products.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="img" />
              <p>{item.title}</p>
            </div>
            <div className="edit_container">
                <div className="count_btns">
                  <button  onClick={() => ADD_COUNT(item)}> + </button>
                  <button>{item.amount}</button>
                  <button onClick={() => MINUS_COUNT(item)}> - </button>
                </div>
                <div>
                  <span>{item.price}</span>
                  <i
                    className="fa fa-trash my_trash"
                    aria-hidden="true"
                    onClick={() => handleClick(item)}
                  ></i>
                </div>
            </div>
          </div>
        ))}

      </article>
        <div className="total">
          <div>
            <span>Total Price: </span>
            <span> Rs - {total}</span>
          </div>
            <button className="checkout">Proceed to Checkout</button>
        </div>
    </div>
  );
};

export default Cart;
