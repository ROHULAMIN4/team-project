import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://salty-fortress-77279.herokuapp.com/addproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div>
        <div className="row">
          {products
            .map((product) => (
              <Product key={product._id} product={product}></Product>
            ))
            .slice(0, 8)}
        </div>
      </div>
    </>
  );
};

export default Products;
