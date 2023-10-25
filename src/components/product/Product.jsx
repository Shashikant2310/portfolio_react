import React from "react";
import "./product.css";

const Product = (props) => {
  return (
    <div className="p w-2/5 h-[20vh] md:w-[30%] md:h-[40vh] dark:border-0 overflow-hidden my-5 mx-2 border border-gray-200 rounded-tl-lg rounded-tr-lg">
      <div className=" h-5 dark:bg-gray-800 bg-[#F3F2F2] flex items-center sticky z-10">
        <div className=" w-[6px] h-[6px] rounded-full dark:bg-gray-300 bg-white m-1"></div>
        <div className=" w-[6px] h-[6px] rounded-full dark:bg-gray-300 bg-white m-1"></div>
        <div className=" w-[6px] h-[6px] rounded-full dark:bg-gray-300 bg-white m-1"></div>
      </div>
      <a href={props.link} target="_blank">
        <img src={props.img} alt="website" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
