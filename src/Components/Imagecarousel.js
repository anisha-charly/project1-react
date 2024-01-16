import React from "react";
import Mycard from "./Mycard.js";
import "./Imagecarousel.css";

const Imagecarousel = () => {
  let box = document.querySelector(".product-container");
  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };
  const btnpressnxt = () => {
    let width = box.clientWidth;
    box.scrollRight = box.scrollRight + width;
    console.log(width);
  };
  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="nxt-btn" onClick={btnpressnxt}>
        <p>&gt;</p>
      </button>
      <div className="product-container">
        <Mycard cardno="1" />
        <Mycard cardno="2" />
        <Mycard cardno="4" />
        <Mycard cardno="5" />
        <Mycard cardno="6" />
        <Mycard cardno="7" />
      </div>
    </div>
  );
};

export default Imagecarousel;
