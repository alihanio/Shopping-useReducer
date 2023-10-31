import React from "react";
import styled from "styled-components";

export const ProductItem = ({
  name,
  price,
  src,
  alt,
  quantity,
  id,
  minusProductHundler,
  addproductHundler,
  removeCart,
}) => {
  const increment = () => {
    addproductHundler(id);
  };
  const decrement = () => {
    minusProductHundler(id);
  };
  return (
    <ProductContainer>
      <ProductImage src={src} alt={alt} />
      <ProductName>{name}</ProductName>
      <ProductPrice>{price} сом</ProductPrice>
      <ButtonsCont>
        <Button onClick={decrement}>-</Button>
        <span>{quantity}</span>
        <Button onClick={increment}>+</Button>
      </ButtonsCont>
      <RemoveBtn onClick={() => removeCart(id)}>remove</RemoveBtn>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  text-align: center;
  transition: 0.3s ease-in;
  &:hover {
    transform: scale(1.02);
  }
`;

const ProductName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductPrice = styled.div`
  font-size: 16px;
`;

const ProductImage = styled.img`
  max-width: 100px;
  max-height: 100px;
`;
const ButtonsCont = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
const Button = styled.button`
  width: 1.5rem;
  height: 2rem;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background-color: #18a1b5;
  &:active {
    background-color: #49a2b9;
  }
`;
const RemoveBtn = styled.button`
  width: 4rem;
  height: 2rem;
  border: none;
  border-radius: 5px;
  background-color: #da3547;
  color: white;
  cursor: pointer;
  &:active {
    background-color: red;
  }
`;
