import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="w-[14%] flex flex-col text-gray-800 m-[2%] transition-all pb-[0.5%] hover:shadow-lg duration-300 " to={`/product/${product._id}`}>
      <img className="" src={product.images[0].url} alt={product.name} />
      <p className="font-Roboto text-base my-[1%] mx-[0.5%] mb-0">{product.name}</p>
      <div className="m-[0.5%] flex justify-start items-center">
        <Rating {...options} />{" "}
        <span className="m[0.5%] font-light text-sm font-Roboto ">
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span className="m-[0.5%] text-yellow-700 font-Roboto text-base">{`$${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;