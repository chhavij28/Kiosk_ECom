import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { assets } from '../assets/assets';
import SimilarProducts from '../components/SimilarProducts';
import axios from "axios";

const Product = () => {
  const { productId } = useParams();
  const { currency, addToCart } = useContext(CartContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    axios.get(`http://localhost:3000/api/product/${productId}`)
    .then(response =>{
        console.log("response:", response);
        setProductData(response.data.product);
    })
    .catch(error =>{
        console.log("error fetching product:", error.message);
    })
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="pt-4 border-top">
      {/* Product Data */}
      <div className="row g-4">
        {/* Product Images */}
        <div className="col-md-4 d-flex flex-column flex-md-row">
            <img src={productData["image"][0]} className="img-fluid" alt="Main Product" />
        </div>

        {/* Product Info */}
        <div className="col-md-8 text-start">
          <h1 className="h2">{productData.name}</h1>
          {/* <div className="d-flex align-items-center mt-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="Rating" className="me-1" style={{ width: '16px' }} />
            ))}
            <img src={assets.star_dull_icon} alt="Rating" className="me-2" style={{ width: '16px' }} />
            <span>(122)</span>
          </div> */}
          <h2 className="mt-3 h4">{currency}{productData.price}</h2>
          <p className="text-muted mt-3">{productData.description}</p>

          {/* <div className="mt-4">
            <p>Select Size</p>
            <div className="d-flex flex-wrap gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`btn btn-outline-secondary ${item === size ? 'border-warning' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div> */}

          <button
            onClick={() => addToCart(productData._id)}
            className="btn btn-dark mt-4"
          >
            ADD TO CART
          </button>

          <hr className="mt-4" />
          <div className="text-muted small mt-3">
            <p>Guaranteed 100% Authentic – Shop with Confidence!</p>
            <p>Enjoy Cash on Delivery – Pay at Your Doorstep!</p>
            <p>Hassle-Free Returns & Exchanges – 10 Days, No Questions Asked!</p>
          </div>
        </div>
      </div>

      

      {/* Display Related Products */}
      <SimilarProducts category={productData.category} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
