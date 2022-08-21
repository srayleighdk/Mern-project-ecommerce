import React, { useEffect } from "react";

import ProductCard from "./ProductCard";
import MetaData from "../Metadata";
import { getProduct } from "../../store/features/product/productSlice";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="ECOMMERCE" />

          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen flex flex-col text-center items-center justify-center text-white after:w-screen after:h-screen after:bg-white after:absolute after:clip-path-polygon-[_100%_70%,0_100%,_100%_100%]">
            <p className="font-light text-2xl font-Aboreto">
              Welcome to Ecommerce
            </p>
            <h1 className="m-10 font-semibold text-4xl font-Roboto">
              FIND AMAZING PRODUCTS BELOW
            </h1>

            <a href="#container">
              <button className="mb-10 text-black cursor-pointer bg-white border border-solid border-white rounded-lg p-2 transition ease-out duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:text-white duration-300 w-20 font-medium text-xl font-Roboto">
                Scroll
              </button>
            </a>
          </div>

          <h2 className="text-center font-Roboto text-xl border-b border-solid border-gray-600 w-1/4 p-[1%] my-[5%] mx-auto text-gray-800">
            Featured Products
          </h2>

          <div
            className="flex my-[2%] mx-auto w-[80%] flex-wrap justify-center max-w-full"
            id="container"
          >
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
