import * as React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import {  Routes, Route } from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.user.currentuser);
  return (
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<Cart />} />
      <Route path="success" element={<Success />} />
      <Route path="product" element={<Product />}>
        <Route path=":productid" element={<Product />}></Route>
      </Route>
      <Route path="products" element={<ProductList />}>
        {/* <Route path=":productid" element={<Product/>}></Route> */}
        <Route path=":category" element={<ProductList />}></Route>
      </Route>
      {user ? (
        <Route path="/" element={<Home />}></Route>
      ) : (
        <Route path="login" element={<Login />}></Route>
      )}
      <Route
        path="*"
        element={
          <main style={{ padding: "20rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default App;
