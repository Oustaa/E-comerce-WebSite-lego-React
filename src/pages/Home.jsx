import React, { useEffect } from "react";
import Carosal from "../Components/Carosal";
import Catigories from "../catigoruse";

const Home = () => {
  useEffect(() => {
    document.title = "LEGO Store Clone";
  });
  return (
    <>
      <Carosal />
      <Catigories />
    </>
  );
};

export default Home;
