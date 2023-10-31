import React from "react";
import styled from "styled-components";

const Cart = ({ cart }) => {
  return (
    <CartConteiner>
      {cart.map(({ name, totalPrice, src, alt, id }) => (
        <CartBox key={id}>
          <Image src={src} alt={alt} />
          <h3>Product: {name}</h3>
          <h3>Total price: {totalPrice} coм</h3>
          <Added>ADDED</Added>
        </CartBox>
      ))}
    </CartConteiner>
  );
};

export default Cart;

const CartConteiner = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-top: 3rem;
`;
const CartBox = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: column;
  // border: 1px solid;
  align-items: center;
  box-shadow: 0.5px 2.3px 22.6px rgba(114, 114, 114, 0.247),
    1.3px 6.3px 62.6px rgba(109, 109, 109, 0.247);
  transform: scale(1.02);
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px 0px;
    transform: scale(1);
    border: 1px solid black;
  }
`;
const Image = styled.img`
  width: 12rem;
  height: 12rem;
`;
const Added = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 6rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #74c686;
  margin: 1rem 1rem;
`;
