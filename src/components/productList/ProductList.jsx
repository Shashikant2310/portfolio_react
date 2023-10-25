import React from "react";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="p-2 md:py-12 md:px-24 flex flex-col items-center text-center ">
      <div className="w-full md:w-4/6">
        <h1 className="text-5xl font-semibold">Projects Create & inspire.</h1>
        <p className=" hidden md:block my-5">
          creative portfolio that your work has been waiting for. Beautiful
          homes, stunning portfolio styles & a whole lot more awaits inside.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-between">
        {products.map((product) => (
          <Product key={product.id} img={product.img} link={product.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
