import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDelete = () => {


    const navigate = useNavigate();
    const [name, setName] = useState("");


    const onSubmitHandler = async (event) => {
        event.preventDefault();


        let result = false;
        let count = 0;
        await axios.post('http://localhost:3000/api/product/delete',{
            name : name
        })
        .then(response => {
            result = response.data.success && response.data.result.acknowledged;
            count = response.data.result.deletedCount;
        })
        .catch(error =>{
            console.log("error sending post request to server:", error.message);
        })
        if(count == 0){
            alert("No such product found!");
        }
        else if(result== true){
            alert("Product deleted successfully!");
        }
        else {
            alert("Operation falied! Please try again...")
        }
    }


    return (
        <div>
            <div>
            <form onSubmit={onSubmitHandler} className="container mt-5" style={{ maxWidth: '30rem', width: '90%' }}>
                <div className="d-flex align-items-center gap-2 mt-4 mb-3 justify-content-center">
                <p className="h3">Delete Product</p>
                </div>

                <div>
                    <p>Please fill in the exact product name.</p>
                <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control mb-3"
                placeholder="Product Name"
                required
                />
                </div>

                <button type="submit" className="btn btn-dark">
                Delete
                </button>
            </form>
            <div className="text-end">
                <button onClick={()=>{navigate("/admin")}} className="btn btn-dark mt-4">
                Admin Dashboard
                </button>
            </div>
            </div>
        </div>
    )
}

export default AdminDelete;