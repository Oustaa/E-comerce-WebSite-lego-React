import React, { useState, useEffect } from "react";

const carosalsDate = [
  {
    title: "LEGO Architectur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quod quae soluta error facere architecto delectus, ad pariatur necessitatibus nesciunt ab tempore nihil iste atque?",
    path: "#LEGO_architecture",
    id: 541524,
    img: "./Imgs/lego-architecture-skyline-interior-decorating-02.jpg",
  },
  {
    title: "LEGO Technic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quod quae soluta error facere architecto delectus, ad pariatur necessitatibus nesciunt ab tempore nihil iste atque?",
    path: "#LEGO_Technic",
    id: 847516,
    img: "./Imgs/lego-technic.jpg",
  },
  {
    title: "LEGO Minecraft",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quod quae soluta error facere architecto delectus, ad pariatur necessitatibus nesciunt ab tempore nihil iste atque?",
    path: "#LEGO_Minecraft",
    id: 789486,
    img: "./Imgs/LegoMincraft.jpg",
  },
];

const Carosal = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const lastIndex = 2;

    if (current < 0) {
      setCurrent(lastIndex);
    }

    if (current > lastIndex) {
      setCurrent(0);
    }
  }, [current]);

  const nextOne = () => {
    setCurrent(current + 1);
  };
  const previosOne = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div id="carosals">
        {" "}
        {carosalsDate.map(({ title, description, id, path, img }, index) => {
          const position = index === current && "active";
          return (
            <div key={id} className={`carosals__item ${position}`}>
              <img src={img} alt="" />
              <div className="carosals_content">
                <h1> {title} </h1> <p> {description} </p>{" "}
                <a className="btn btn-warning" href={path}>
                  {" "}
                  Shop Now{" "}
                </a>{" "}
              </div>{" "}
            </div>
          );
        })}{" "}
        <div className="carosal-btns">
          <button onClick={previosOne} className="btn btn btn-warning">
            <i className="bi bi-caret-left-fill"> </i>{" "}
          </button>{" "}
          <button onClick={nextOne} className="btn btn btn-warning">
            <i className="bi bi-caret-right-fill"> </i>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Carosal;
