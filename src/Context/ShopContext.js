import { createContext, useReducer, useContext, useEffect } from "react";
import shopReducer, { initialState } from "../Context/ShopReducer";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {
    updatePrice(state.products);
  }, [state.products]); 

  const addToCart = (product) => {
    const updatedCart = state.products.concat(product);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.id !== product.id
    );
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const ADD_COUNT = (item) => {
    console.log(item.amount);
    
    const updatedCart = state.products.map((product) =>
      product.id === item.id
        ? { ...product, amount: product.amount + 1 }
        : product
    );
    dispatch({
      type: "ADD_COUNT",
      payload: { updatedCart },
    });
  };

  const MINUS_COUNT = (item) => {
    const updatedCart = state.products.map((product) =>
      product.id === item.id
        ? { ...product, amount: product.amount > 1 ? product.amount - 1 : 1 }
        : product
    );
    dispatch({
      type: "MINUS_COUNT",
      payload: { updatedCart },
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.amount * product.price;
    });

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
    ADD_COUNT,
    MINUS_COUNT,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useShop;
