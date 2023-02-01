import React, { useState, useEffect } from "react";
import items from "../data";
import Card from "../Components/card";

const categoreis = [
  "All",
  ...new Set(
    items.map((item) => {
      return item.Category;
    })
  ),
];

const Products = () => {
  const [filter, setFilter] = useState("All");
  const [products, setProducts] = useState(items);

  const hundelFilterChange = (e) => {
    const index = e.target.value;
    setFilter(categoreis[index]);
  };

  useEffect(() => {
    let productsToShow = items.filter((item) => {
      return item.Category === filter;
    });
    if (filter === "All") {
      productsToShow = items;
    }
    setProducts(productsToShow);
  }, [filter]);

  useEffect(() => {
    document.title = "LEGO Store Clone | Our Products";
  });
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mt-5">Our Products</h1>
      <hr
        className="py-1 rounded-1 bg-warning"
        style={{ width: "300px", margin: "auto" }}
      />
      <div className="row pt-4">
        <div className="col-6 col-lg-3 mx-auto">
          <p className="text-muted text-center">filter by category</p>
          <select
            name="filter"
            className="form-control"
            onChange={hundelFilterChange}
          >
            <option value="0">All</option>
            <option value="1">Architectur</option>
            <option value="2">Technic</option>
            <option value="3">Minecraft</option>
          </select>
        </div>
      </div>
      <div className="row my-5">
        {products.map((item, index) => {
          return (
            <div key={index * 5484 + 621} className="col-6 col-lg-3 py-4">
              <Card {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
