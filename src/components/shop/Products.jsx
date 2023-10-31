import React from "react";
import styled from "styled-components";
import { FaShoppingBasket } from "react-icons/fa";
import { ProductItem } from "./ProductItem";

export const Products = ({
  products,
  minusProductHundler,
  addproductHundler,
  removeCart,
  totalPrice,
}) => {
  return (
    <ProductsContainer>
      <Title>Товары в магазине:</Title>
      <>
        {products.map((item) => {
          return (
            <ProductItem
              {...item}
              key={item.id}
              minusProductHundler={minusProductHundler}
              addproductHundler={addproductHundler}
              removeCart={removeCart}
            />
          );
        })}
      </>
      <ShoppingCartIcon />
      <TotalPrice>TOTAL: {totalPrice} coм</TotalPrice>
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ShoppingCartIcon = styled(FaShoppingBasket)`
  font-size: 36px;
  margin-top: 20px;
`;
const TotalPrice = styled.span`
  font-size: 2rem;
`;
