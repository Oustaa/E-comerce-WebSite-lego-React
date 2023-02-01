import React, { useState } from "react";
import items from "./data";
import Card from "./Components/card";

const categoreis = [
  ...new Set(
    items.map((item) => {
      return item.Category;
    })
  ),
];

const catigoruse = () => {
  const ids = {
    0: "LEGO_architecture",
    1: "LEGO_Technic",
    2: "LEGO_Minecraft",
  };

  return (
    <div className="container">
      {categoreis.map((cati, index) => {
        let childrenItems = 0;
        return (
          <div key={index + 587498} className="row pt-5" id={ids[index]}>
            <h3 id="">{cati}</h3>
            {items.map((item) => {
              if (item.Category === cati && childrenItems < 4) {
                childrenItems++;

                return (
                  <div key={item.id + 500} className="col-6 col-lg-3 py-4">
                    <Card {...item} />
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default catigoruse;
