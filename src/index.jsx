import React from "react";
import "./main.css";
import { AppProvider } from "./Components/context";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import NavBAr from "./Components/navBar";
import Footer from "./Components/Footer";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Erorr from "./pages/notFound";

import ScrollToTop from "./Components/ScroolToTop";

const MyAppRouter = () => {
  return (
    <Router>
      <NavBAr />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/product/:id"
          element={<Product component={<Product />} />}
        ></Route>
        <Route path="/*" element={<Erorr />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

const App = () => {
  return (
    <React.StrictMode>
      <AppProvider>
        <MyAppRouter />
      </AppProvider>
    </React.StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
