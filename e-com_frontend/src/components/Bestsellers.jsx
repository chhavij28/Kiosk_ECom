import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductItem from "./ProductItem";
import axios from "axios";

const Bestsellers = () => {
  const [ products, setProducts ] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/product/collections');
        const allProducts = response.data.products;
        setProducts(allProducts);
        const bestProduct = allProducts.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 8));
      } catch (error) {
        console.error("error fetching products:", error.message);
      }
    };

    getProducts();
  }, []);


  return (
    <div className="my-5">
      <div className="py-4 text-center">
        <p className="h4">OUR BESTSELLERS</p>
        <p className="mx-auto text-muted small w-75">
          Browse the enchanted collection that's flying off shelves faster than a Firebolt!
        </p>
      </div>

      <div className="row gy-4 gx-3">
        {bestSeller.length > 0 && bestSeller.map((item, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-3">
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />  
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
