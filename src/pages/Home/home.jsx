import React, { useEffect, useCallback } from "react";
import Product from "../../components/Product";

const Home = ({ products, loadProducts, loadCart, loading, hasError }) => {
  const loadData = useCallback(async () => {
    await Promise.all([loadProducts(), loadCart()]);
  }, [loadProducts, loadCart]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }

  if (hasError) {
    return <h1 data-testid="error">Something went wrong...</h1>;
  }

  return (
    <div data-testid="products-info">
      {products?.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Home;
