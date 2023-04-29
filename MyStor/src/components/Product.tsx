import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductInterface } from "../interface/Product";
import { getProduct } from "../Services/Produts";
import Loading from "./Loading";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductInterface | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getProduct(id!);
      setProduct(data);
    };
    getData();
  }, []);
  return (
    <>
      {product != null ? (
        <div>
          <p>{product?.name}</p>
          <p>{product?.category}</p>
          <p>{product?.manufacturer}</p>
          <p>{product?.price}$</p>
          <p>{product?.description}</p>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Product;
