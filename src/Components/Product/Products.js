import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/features/product/productSlice";
import Loading from "../Loading/Loading";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";
import { Pagination } from "@mui/material";

const Products = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const {
    products,
    loading,
    productsCount,
    resulPerPage,
    filteredProductsCount,
    count,
  } = useSelector((state) => state.product);
  const { keyword } = useParams();
  const params = { keyword, page };
  useEffect(() => {
    dispatch(getProduct(params));
  }, [dispatch, keyword, page]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {products && (
            <>
              <div className="h-screen">
                <h2 className="productsHeading my-4 mx-auto w-1/6 border-b border-solid border-gray-600 p-4 text-gray-800 font-medium text-xl font-Roboto text-center">
                  Products
                </h2>
                <div className="products flex flex-wrap justify-center">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
                <div className="paginationBox mt-5">
                  <Pagination
                    count={count}
                    page={page}
                    classes={{ ul: "justify-center" }}
                    onChange={(e, value) => setPage(value)}
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Products;
