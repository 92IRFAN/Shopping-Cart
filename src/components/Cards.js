import React, { useState } from "react";
import "../styles/cards.css";
import useShop from "../Context/ShopContext";

const Cards = ({ item }) => {
  const { title, author, price, img } = item;
  const [warning, setWarning] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const { addToCart, products } = useShop();

    const handleClick = (item) => {

        let isPresent = false;
        products.forEach((product) => {
        if (item.id === product.id) isPresent = true;
        });

        if (isPresent) {
        setWarning(true);
        setTimeout(() => {
            setWarning(false);
        }, 2000);
        return;
        }

        addToCart(item);    // Calling the addToCart function
        setIsAdded(true); 
        
        setTimeout(() => {
        setIsAdded(false); 
        }, 2000);
        
    };

  return (
    <>
      <div className="cards">
        <div className="image_box">
          <img src={img} alt="Image" />
        </div>
        <div className="details">
          <div className="desc">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price - {price}Rs</p>
          </div>
          <button onClick={() => handleClick(item)}>
            {isAdded ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>

      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}
    </>
  );
};

export default Cards;
