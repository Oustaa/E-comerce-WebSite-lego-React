import React, { useRef, useEffect, useState } from "react";
import items from "../data";
import Card from "../Components/card";
import { useParams } from "react-router-dom";

const Product = () => {
  const product_Id = useParams().id;
  const mainImg = useRef();

  const [recommandation, setRecommandation] = useState([]);
  const [item, setItem] = useState(items[product_Id]);
  const [unitnums, setUnitNums] = useState(0);

  const commentInput = useRef();
  const [comments, setComments] = useState(item.comments);

  useEffect(() => {
    document.title = "LEGO Store Clone" + " | " + item.name;
  });

  const storage = localStorage;
  if (storage.getItem("cartItems") === null) {
    storage.setItem("cartItems", JSON.stringify([]));
  }

  useEffect(() => {
    setItem(items[product_Id]);
    const recomman = items.filter(({ Category, id }) => {
      return item.Category === Category && item.id !== id;
    });
    setRecommandation(recomman);
  }, [product_Id]);

  const increaceUnits = () => {
    item.quantiteOnStock > unitnums && setUnitNums(unitnums + 1);
  };

  const decreaceUnits = () => {
    unitnums > 0 && setUnitNums(unitnums - 1);
  };

  const AddComment = () => {
    if (commentInput.current.value) {
      const comment = { img: "../imgs/avatar.png", userName: "User Name" };
      const commentDate = new Date();
      const dd =
        commentDate.getDate() < 10
          ? "0" + commentDate.getDate()
          : commentDate.getDate();
      const mm =
        commentDate.getMonth() < 10
          ? "0" + commentDate.getMonth()
          : commentDate.getMonth();
      const yyyy = commentDate.getFullYear();
      comment.creatAt = `${yyyy}/${mm}/${dd}`;
      comment.comment = commentInput.current.value;
      setComments([...comments, comment]);
      commentInput.current.value = "";
    }
  };

  function isExist(id, cart) {
    for (let i of cart) {
      if (i.id == id) {
        return cart.indexOf(i);
      }
    }
    return -1;
  }

  const addTocart = () => {
    const cartItems = JSON.parse(storage.getItem("cartItems"));
    if (unitnums > 0) {
      const index = isExist(item.id, cartItems);
      if (index === -1) {
        item.quantity = unitnums;
        const allItems = [...cartItems, item];
        storage.setItem("cartItems", JSON.stringify(allItems));
      } else {
        cartItems[index].quantity =
          cartItems[index].quantity + unitnums <
          cartItems[index].quantiteOnStock
            ? cartItems[index].quantity + unitnums
            : cartItems[index].quantiteOnStock;
        storage.setItem("cartItems", JSON.stringify(cartItems));
      }
      setUnitNums(0);
    }
  };

  const displayImg = (e) => {
    mainImg.current.src = e.target.src;
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-lg-6 p-3">
          <img
            ref={mainImg}
            src={item.imgs[0]}
            alt={item.name}
            className="d-block m-auto image-fluid"
          />
          <div className="row mt-4">
            {item.imgs.map((img, index) => {
              return (
                <div key={index + 77849} className="col-3">
                  <img
                    onClick={displayImg}
                    src={img}
                    alt=""
                    className="image-fluid cursor-pointer hoverable"
                    width={120}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-lg-6 py-3 px-5 mt-6">
          <p className="text-muted ">{item.Category}</p>
          <h2 className="display-5">{item.name}</h2>
          <hr />
          <h2 className="display-5 text-end">{item.price}$</h2>
          <div
            className={`alert alert-${
              item.onStock ? "success" : "danger"
            } text-end`}
          >
            {item.onStock ? "In Stock" : "Not availabe"}
          </div>
          <hr />

          {item.onStock && (
            <>
              <div className="btn-group  d-end" role="group">
                <button onClick={increaceUnits} className="btn btn-primary">
                  +
                </button>
                <button className="btn btn-default" disabled>
                  {unitnums}
                </button>
                <button onClick={decreaceUnits} className="btn btn-primary">
                  -
                </button>
              </div>
              <button
                onClick={addTocart}
                className="btn btn-primary d-end mt-3"
              >
                Add To Card <i className="bi bi-bag-plus-fill"></i>
              </button>
            </>
          )}
        </div>
      </div>
      <div className="row">
        <hr />
        <div className="col-12 col-lg-6">
          <h2 className="display-6">Description: </h2>
          {item.description.map((descrip, index) => {
            return <p key={index + 7897}>{descrip}</p>;
          })}
          <h2 className="display-6 mt-5">Specifite: </h2>
          <ul>
            {item.specifite.map((spec, index) => {
              return <li key={index + 7984215}>{spec}</li>;
            })}
          </ul>
        </div>
        <div className="col-12 col-lg-6">
          <h2 className="display-6">Comments: </h2>
          {comments.map(({ creatAt, img, userName, comment }, index) => {
            return (
              <div key={index + 1 * 4857} className="card mb-2">
                <div className="card-header">
                  <div className="row">
                    <div className="col-2">
                      <img src={img} className="img-fluid" alt="" />
                    </div>
                    <div className="col">
                      <h4>{userName}</h4>
                      <p>{creatAt}</p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">{comment}</p>
                </div>
              </div>
            );
          })}
          <form className="form mb-5">
            <div className="input-group">
              <input ref={commentInput} type="text" className="form-control" />
              <div className="input-group-append">
                <button
                  onClick={AddComment}
                  type="button"
                  className="btn btn-primary"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <hr />
        <h2 className="display-6 font-weight-bold">Recommended For You: </h2>
        <div className="row">
          {recommandation.map((Recommand) => {
            return (
              <div key={Recommand.id + 505040} className="col-6 col-lg-3">
                <Card {...Recommand} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
