import * as React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  // const navigate = useNavigate();
  // const user = true;
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {" "}
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product" element={<Product />}>
        <Route path=":productid" element={<Product />}></Route>
      </Route>
      <Route path="products" element={<ProductList />}>
        {/* <Route path=":productid" element={<Product/>}></Route> */}
        <Route path=":category" element={<ProductList />}></Route>
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "20rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />{" "}
    </Routes>
  );
};

export default App;
