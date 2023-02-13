import React, { useEffect, useCallback } from "react";
import { useProductContext } from "../../context/productContext";
import { useCartContext } from "../../context/cartContext";
import Product from "../../components/Product";

const Home = ({ products, loadProducts, loadCart }) => {
  const loadData = useCallback(async () => {
    await Promise.all([loadProducts(), loadCart()]);
  }, [loadProducts, loadCart]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      {products?.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Home;
