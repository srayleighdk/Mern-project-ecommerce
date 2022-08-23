import React, { Fragment, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../store/features/product/productDetailsSlice";
// import ReviewCard from "./ReviewCard.js";
import Loading from "../Loading/Loading";
import MetaData from "../Metadata";

import { Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { id } = useParams();

  const options = {
    readOnly: true,
    precision: 0.5,
  };

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);
  console.log(product);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {product ? (
            <>
              <div className="ProductDetails bg-stone-200 w-screen max-w-full p-[6%] box-border flex">
                <div className="w-full p-[5%] box-border border border-solid border-white">
                  <Carousel
                    className=""
                    showIndicators={false}
                    showThumbs={false}
                  >
                    {product.images.map((item, i) => (
                      <img
                        className="CarouselImage w-[20%]"
                        key={i}
                        src={item.url}
                        alt={`${i} Slide`}
                      />
                    ))}
                  </Carousel>
                </div>
                <div className="w-full flex flex-col  justify-evenly items-start p-[5%] box-border border border-solid border-white ">
                  <div className="detailsBlock-1">
                    <h2 className="text-gray-800 font-semibold text-2xl font-Roboto">
                      {product.name}
                    </h2>
                    <p className="text-gray-800 font-extralight text-xs">
                      Product # {product._id}
                    </p>
                  </div>
                  <div className="detailsBlock-2 flex justify-start border-t border-b border-solid py-5 px-0 border-slate-900 w-[70%]">
                    <Rating
                      readOnly={true}
                      precision={0.5}
                      value={product.ratings}
                    />
                    <span className="text-gray-800">
                      ({product.numOfReviews} Reviews)
                    </span>
                  </div>
                  <div className="detailsBlock-3">
                    <h1 className="text-gray-800 font-normal font-Roboto text-3xl my-10 mx-0">{`$${product.price}`}</h1>
                    <div className="detailsBlock-3-1 flex items-center">
                      <div className="detailsBlock-3-1-1">
                        <button className="box-border w-6 py-1 bg-gray-800 rounded-md cursor-pointer text-white hover:bg-gray-600 duration-200">
                          -
                        </button>
                        <input
                          className="w-10 text-center border-none p-1"
                          value={1}
                          type="number"
                        />
                        <button className="box-border w-6 py-1 bg-gray-800 rounded-md cursor-pointer text-white hover:bg-gray-600 duration-200">
                          +
                        </button>
                      </div>
                      <button className="border-none cursor-pointer text-white bg-sky-600 font-medium py-1 px-1 rounded-xl hover:bg-sky-400 duration-200 ml-5 ">
                        Add to Cart
                      </button>
                    </div>

                    <p className="border-y border-solid border-gray-700 text-gray-800 font-normal text-base font-Roboto text-base my-[5%] mx-0 ">
                      Status:
                      <b
                        className={
                          product.Stock < 1 ? "text-red-600" : "text-green-600"
                        }
                      >
                        {product.Stock < 1 ? " OutOfStock" : " InStock"}
                      </b>
                    </p>
                  </div>
                  <div className="detailsBlock-4 text-gray-800 font-medium text-lg font-Roboto">
                    Description :{" "}
                    <p className="text-gray-800 font-light text-sm font-Roboto">
                      {product.description}
                    </p>
                  </div>

                  <button className="submitReview border-none cursor-pointer text-white bg-sky-600 font-medium py-1 px-1 rounded-xl hover:bg-sky-400 duration-200">
                    Submit Review
                  </button>
                </div>
              </div>

              <h3 className="reviewsHeading text-gray-800 font-medium font-Roboto text-center border-b border-solid border-gray-600 p-4 w-[20%] m-auto mb-7 text-2xl">
                Reviews
              </h3>
              {product.reviews && product.reviews[0] ? (
                <div className="reviews flex overflow-auto">
                  {product.reviews.map((review, i) => (
                    <ReviewCard key={i} review={review} />
                  ))}
                </div>
              ) : (
                <div>
                  <p className="noReviews font-normal text-lg font-Roboto text-center text-gray-800">
                    No Reviews Yet
                  </p>
                </div>
              )}
            </>
          ) : (
            <Loading />
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
