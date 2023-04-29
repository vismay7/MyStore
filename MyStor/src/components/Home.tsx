import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllProducts } from "../interface/AllProducts";
import { getData } from "../Services/Produts";
import Categories from "./Categories";
import Loading from "./Loading";
import Product from "./Product";

const Home = () => {
  const [allProducts, setAllProducts] = useState<AllProducts | null>(null);

  useEffect(() => {
    const getProductData = async () => {
      const data = await getData();
      setAllProducts(data);
    };
    getProductData();
  }, []);

  return (
    <>
      <Categories />
      {allProducts != null ? (
        allProducts.products.map((e) => (
          <div key={e.id}>
            <Link to={`/product/${e.id!}`}>{e.name}</Link>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
