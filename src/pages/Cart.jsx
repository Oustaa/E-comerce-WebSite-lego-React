import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [itemsInCart, SetItemInCart] = useState([]);

  const [TVA, setTVA] = useState(0);
  const [price, setPrice] = useState(0);
  const [priceAfterTVA, setPriceAfterTVA] = useState(0);

  useEffect(() => {
    setPrice(0);
    for (const i of itemsInCart) {
      const newPrice = i.price * i.quantity;
      setPrice((price) => price + newPrice);
    }
  }, [itemsInCart]);

  useEffect(() => {
    setPriceAfterTVA((price * 0.85).toFixed(2));
  }, [price]);

  useEffect(() => {
    setTVA((price - priceAfterTVA).toFixed(2));
  }, [priceAfterTVA]);

  useEffect(() => {
    const iteminCart = JSON.parse(localStorage.getItem("cartItems"));
    if (iteminCart !== null) {
      SetItemInCart(iteminCart);
    }
    document.title = "LEGO Store Clone | Cart";
  }, []);

  const removeItem = (id) => {
    const newItems = itemsInCart.filter((item) => {
      if (item.id === id) {
        if (item.quantity - 1 > 0) {
          return { ...item, quantity: item.quantity-- };
        }
      } else {
        return item;
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(newItems));
    SetItemInCart(newItems);
  };

  return (
    <>
      <div className="container p-5">
        <h1 className="display-4 text-center mt-5"> Cart </h1>{" "}
        <hr
          className="py-1 rounded-1 bg-warning mb-5"
          style={{ width: "20%", margin: "auto" }}
        />{" "}
        <div className="row">
          <div className="col-12 col-lg-6">
            {" "}
            {itemsInCart.length === 0 ? (
              <>
                <div className="text-center d-flex flex-column justify-content-center">
                  <h1> Cart Is Empty </h1>{" "}
                  <p style={{ maxWidth: "400px", margin: "0 auto 10px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Ut
                    corporis iusto libero maxime!Adipisci, minima consequuntur
                    dolor laboriosam{" "}
                  </p>{" "}
                  <Link to="/" className="btn btn-primary align-self-center">
                    Back Home{" "}
                  </Link>{" "}
                </div>{" "}
              </>
            ) : (
              <>
                <h3 className="mb-4"> Cart Items </h3>{" "}
                {itemsInCart.map(
                  ({ imgs, Category, name, quantity, price, id }, index) => {
                    return (
                      <div key={index * 125 + 95} className="card p-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-6 col-xl-3">
                              <img src={imgs[0]} width="120" alt={name} />{" "}
                            </div>{" "}
                            <div className="col-6 d-flex flex-column justify-content-center">
                              <p className="text-muted"> {Category} </p>{" "}
                              <h5> {name} </h5>{" "}
                              <p className="text-muted">
                                <em> Quantitie: </em> {quantity}{" "}
                              </p>{" "}
                            </div>{" "}
                            <div className="col-12 col-xl-3 d-flex  flex-xl-column justify-content-center">
                              <h5 className="text-end"> {price}$ </h5>{" "}
                              <button
                                onClick={() => {
                                  removeItem(id);
                                }}
                                className="btn-outline-danger btn d-end"
                              >
                                <i className="bi bi-trash-fill"> </i> Delete{" "}
                              </button>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>
                    );
                  }
                )}{" "}
              </>
            )}{" "}
          </div>{" "}
          <div className="col-12 col-lg-6 my-5 my-lg-0">
            <h3 className="mb-2"> Order Summary </h3>{" "}
            <div className="row mt-4">
              <div className="col d-flex justify-content-between">
                <h5 className="text-muted">
                  Order value({itemsInCart.length}) items{" "}
                </h5>{" "}
                <h5> {price.toFixed(2)}$ </h5>{" "}
              </div>{" "}
            </div>{" "}
            <div className="row my-4">
              <div className="col d-flex justify-content-between">
                <h5 className="text-muted"> TVA(15 % ) </h5> <h5> {TVA}$ </h5>{" "}
              </div>{" "}
            </div>{" "}
            <div className="row">
              <div className="col d-flex justify-content-between">
                <h5 className="text-muted"> Totale </h5>{" "}
                <h5> {priceAfterTVA}$ </h5>{" "}
              </div>{" "}
            </div>{" "}
            <button className="btn btn-warning mt-3"> Buy </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Cart;
