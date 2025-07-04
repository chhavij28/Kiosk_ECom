import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminEdit = () => {


    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [field, setField] = useState("");
    const [value, setValue] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        let result = false;
        let count =0;
        let reqbody ;
        if(field === "price"){
            reqbody = {
                name: name,
                field: field,
                value: Number(value),
            }
        }
        else{
            reqbody = {
                name: name,
                field: field,
                value:value,
            }
        }
        await axios.post('http://localhost:3000/api/product/edit', reqbody)
        .then(response => {
            result = response.data.success && response.data.result.acknowledged;
            count = response.data.result.modifiedCount;
        })
        .catch(error =>{
            console.log("error sending post request to server:", error.message);
        })
        if(count == 0){
            alert("No such product found!");
        }
        else if(result== true){
            alert("Product edited successfully!");
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
                <p className="h3">Edit Product</p>
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

                

                <div className="d-flex gap-2 text-start">
                    <p>Choose the field to be edited.</p>
                    <select
                    onChange={(e) => setField(e.target.value)}
                    value={field}
                    className="form-control mb-3"
                    required
                    >
                        <option value="" disabled>Select Field</option>
                        <option value="name">Name</option>
                        <option value="description">Description</option>
                        <option value="price">Price</option>
                        <option value="category">Category</option>
                        <option value="subCategory">SubCategory</option>
                        <option value="bestseller">Bestseller</option>
                    </select>
                </div>

                {field === "name" && (
                    <div>
                        <input
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter new item name."
                        required
                        />
                    </div>
                )}

                {field === "description" && (
                    <div>
                        <input
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter new item description."
                        required
                        />
                    </div>
                )}

                {field === "price" && (
                    <div>
                        <input
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter new price."
                        required
                        />
                    </div>
                )}

                {field === "category" && (
                    <div>
                        <select
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        className="form-control mb-3"
                        required
                        >
                            <option value="" disabled>Select New Category</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Mugs">Mugs</option>
                            <option value="Stationery">Stationery</option>
                            <option value="Keyring">Keyring</option>
                            <option value="Sweet Trolley">Sweet Trolley</option>
                            <option value="Soft Toy">Soft Toy</option>
                        </select>
                    </div>
                )}

                {field === "subCategory" && (
                    <div>
                        <select
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        className="form-control mb-3"
                        required
                        >
                            <option value="" disabled>Select New SubCategory</option>
                            <option value="Gryffindor">Gryffindor</option>
                            <option value="Slytherin">Slytherin</option>
                            <option value="Ravenclaw">Ravenclaw</option>
                            <option value="Hufflepuff">Hufflepuff</option>
                            <option value="Hogwarts">Hogwarts</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                )}

                
                {field === "bestseller" && (
                    <div>
                        <select
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        className="form-control mb-3"
                        required
                        >
                            <option value="" disabled>Bestseller?</option>
                            <option value= "true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                )}

                </div>

                <button type="submit" className="btn btn-dark">
                Edit
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

export default AdminEdit;