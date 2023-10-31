import React, { useEffect, useReducer } from "react";
import { Products } from "./Products";
import Cart from "./Cart";
import Strwberry from "../../assets/images/strwberry.webp";
import Avacado from "../../assets/images/avacado.webp";
import Orange from "../../assets/images/Orange.png";
import styled from "styled-components";

const initProducts = () => {
  const storage = localStorage.getItem("products");
  return storage
    ? JSON.parse(storage)
    : {
        products: [
          {
            id: 1,
            name: "Strwberry",
            price: 10,
            src: Strwberry,
            alt: "Strwberry",
            quantity: 0,
          },
          {
            id: 2,
            name: "Avacado",
            price: 20,
            src: Avacado,
            alt: "Avacado",
            quantity: 0,
          },
          {
            id: 3,
            name: "Orange",
            price: 30,
            src: Orange,
            alt: "Orange",
            quantity: 0,
          },
        ],
        cart: [],
        totalQuantity: 0,
      };
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const productToAdd = state.products.find((item) => {
        return item.id === action.payload;
      });
      if (productToAdd) {
        productToAdd.quantity += 1;
        const itemInCart = state.cart.find((item) => {
          return item.id === productToAdd.id;
        });
        if (itemInCart) {
          itemInCart.quantity += 1;
          itemInCart.totalPrice = itemInCart.quantity * itemInCart.price;
        } else {
          state.cart.push({
            ...productToAdd,
            quantity: 1,
            totalPrice: productToAdd.price,
          });
        }
        state.totalQuantity += 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      return state;

    case "MINUS":
      const minusQuantity = state.cart.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.price;
          }
          if (state.totalQuantity > 0) {
            state.totalQuantity -= 1;
          }
        }
        return item;
      });
      const updateProducts = state.products.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.price;
          }
          if (state.totalQuantity > 0) {
            state.totalQuantity -= 1;
          }
        }
        return item;
      });
      return {
        ...state,
        cart: minusQuantity,
        products: updateProducts,
      };

    case "REMOVE":
      const remove = state.cart.filter((item) => item.id !== action.payload);
      const removeQuantity = state.products.map((item) =>
        item.id === action.payload ? { ...item, quantity: 0 } : { ...item }
      );

      return {
        ...state,
        cart: remove,
        products: removeQuantity,
      };

    default:
      return state;
  }
};
const Shopping = () => {
  const [products, dispatch] = useReducer(productReducer, initProducts());

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addproductHundler = (id) => {
    dispatch({ type: "ADD_PRODUCT", payload: id });
  };
  const minusProductHundler = (id) => {
    dispatch({ type: "MINUS", payload: id });
  };
  const removeCart = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const totalPrices = products.cart.reduce(
    (acc, current) => acc + current.totalPrice,
    0
  );

  return (
    <>
      {totalPrices === 0 ? (
        <CartWarning>your cart is empty</CartWarning>
      ) : (
        <Cart cart={products.cart} />
      )}
      <Products
        products={products.products}
        minusProductHundler={minusProductHundler}
        addproductHundler={addproductHundler}
        removeCart={removeCart}
        totalPrice={totalPrices}
      />
    </>
  );
};

export default Shopping;
const CartWarning = styled.h1`
  width: 20%;
  margin-left: 41%;
  color: #eca9b3;
`;
