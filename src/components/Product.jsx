import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 20px;
  padding: 20px;
  text-align: center;
  font-family: arial;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex: column;
  text-align: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  justify-content: center;
`;

const ProductTitle = styled.h1`
  text-align: center;
  margin: 20px;
`;

const ProductPrice = styled.p`
  color: grey;
  font-size: 22px;
  text-align: center;
  margin: 20px;
`;

const AddToCartButton = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  &:hover {
    opacity: 0.7;
  }
`;

const Product = ({ item }) => {
  return (
    <Card>
    <Link to={`/product/${item._id}`}>
      <Container>
        <Image src={item.image} />
      </Container>
      <Container>
        {" "}
        <ProductTitle>{item.cat}</ProductTitle>
      </Container>
      <Container>
        {" "}
        <ProductPrice>{item.price}</ProductPrice>
      </Container>
      </Link>
      <Container>
        {" "}
        <AddToCartButton>Add to Cart</AddToCartButton>
      </Container>
    </Card>
  );
};

export default Product;
