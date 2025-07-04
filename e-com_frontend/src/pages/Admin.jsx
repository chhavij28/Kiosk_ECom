import React from "react";
import { useNavigate } from "react-router-dom";


const Admin = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex flex-column">
            <h1>ADMIN DASHBOARD</h1>
            <div>
                {/* View Products */}
                <button onClick={() => navigate("/view")} className="btn btn-dark mt-3 w-50">List Products</button>
            </div>
            <div>
                {/* Add New Product */}
                <button onClick={() => navigate("/add")} className="btn btn-dark mt-3 w-50">Add Products</button>
            </div>
            <div>
                {/* Edit existing product */}
                <button onClick={() => navigate("/edit")} className="btn btn-dark mt-3 w-50">Edit Products</button>
            </div>
            <div>
                {/* Delete product */}
                <button onClick={() => navigate("/delete")} className="btn btn-dark mt-3 w-50">Delete Products</button>
            </div>
        </div>
    )
    
}

export default Admin;