import React, { useState, useEffect } from "react";
import styled from "styled-components";
//import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  console.log( `category :${cat}`);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //we will fetch our data here
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          !!cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if ((sort === "newest")) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if ((sort === "asc")){
      setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.price - b.price));
    } else if ((sort === "desc")){
      setFilteredProducts((prev) =>
      [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  console.log();
  return (
    <Container>
      {cat ? filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      )) : products.map((item) => (
        <Product item={item} key={item.id} />
      )) }
    </Container>
  );
};

export default Products;
