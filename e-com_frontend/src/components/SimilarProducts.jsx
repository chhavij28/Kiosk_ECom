import React, { useContext, useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import axios from "axios";

const SimilarProducts = (category) => {
  const [related, setRelated] = useState([]);
    console.log(category);
  useEffect(() => {
    axios.post('http://localhost:3000/api/product/category', category)
    .then(response => {
        setRelated(response.data.products.slice(0, 6));
    })
    .catch(error =>{
        console.log("error fetching products by category:", error.message);
    })
  }, []);

  return (
    <div className="my-5">
      <div className="py-2 text-center">
        <h1>Similar Products</h1>
      </div>
      <div className="row gy-4">
        {related.map((item, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
