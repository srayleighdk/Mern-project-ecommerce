import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/features/product/productSlice";
import Loading from "../Loading/Loading";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, productCount } = useSelector(
    (state) => state.product
  );

  const { keyword } = useParams();
  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="productsHeading my-4 mx-auto w-1/6 border-b border-solid border-gray-600 p-4 text-gray-800 font-medium text-xl font-Roboto text-center">
            Products
          </h2>
          <div className="products flex flex-wrap justify-center">
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

export default Products;
