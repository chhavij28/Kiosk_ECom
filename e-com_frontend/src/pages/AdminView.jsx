import React , { useState, useContext, useEffect } from "react";
import axios from "axios";
import { CartContext } from '../context/CartContext';
import './AdminView.css';
import { useNavigate } from "react-router-dom";


const AdminView = () => {

    const navigate = useNavigate();
    
    const [products, setProducts] = useState([]);
    const { currency } = useContext(CartContext);

    const fetchFunc = async () => {
        let products = [];
        await axios.get('http://localhost:3000/api/product/collections')
        .then(response =>{
            console.log("response:", response);
            products = response.data.products;
        })
        .catch(error =>{
            console.log("error fetching products:", error.message);
        })

        setProducts(products);
    }


    useEffect(() => {
        fetchFunc();
    }, []);

    console.log()
    return (
        <div className="container mt-4">
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Index</th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>SubCategory</th>
                        <th>Price</th>
                        <th>BestSeller</th>
                    </tr>
                </thead>
                <tbody className="table-bg">
                    {products.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.subCategory}</td>
                            <td>{currency}&nbsp;{item.price}</td>
                            <td>{item.bestseller ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-end">
                <button onClick={()=>{navigate("/admin")}} className="btn btn-dark mt-4">
                Admin Dashboard
                </button>
            </div>
        </div>
    )
}

export default AdminView;