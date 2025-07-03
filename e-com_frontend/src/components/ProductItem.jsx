import React, { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);
const currency = '₹'

  return (
    <Link className="text-decoration-none text-dark" to={`/product/${id}`}>
      <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="overflow-hidden d-flex align-items-center justify-content-center"
        style={{
            height: "250px",
            width: "200px",
            backgroundColor: "#fdf6e3"
        }}>
        <img
          className="img-fluid transition-transform"
          style={{ transition: "transform 0.3s ease-in-out" }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          src={image[0]}
          alt="Product"
        />
      </div>
      <p className="pt-2 mb-1">{name}</p>
      <p className="mb-0 fw-medium">
        {currency}&nbsp;
        {price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
      </div>
    </Link>
  );
};

export default ProductItem;
