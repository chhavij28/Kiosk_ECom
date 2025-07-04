import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminAdd = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [imagepath, setImagePath] = useState([]);
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [bestseller, setBestseller] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        let result = false;
        await axios.post('http://localhost:3000/api/product/add', 
            {
                name: name,
                description: description,
                price: price,
                image: imagepath,
                category: category, 
                subCategory: subCategory,
                bestseller: bestseller

            })
        .then(response => {
            result = response.data.success;
        })
        .catch(error =>{
            console.log("error sending post request to server:", error.message);
        })

        if(result== true){
            alert("Product added successfully!");
        }
        else {
            alert("Operation falied! Please try again...")
        }
    }

    return (
        <div>
        <form onSubmit={onSubmitHandler} className="container mt-5" style={{ maxWidth: '30rem', width: '90%' }}>
            <div className="d-flex align-items-center gap-2 mt-4 mb-3 justify-content-center">
            <p className="h3">Add Product</p>
            </div>

            <div>
            <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control mb-3"
            placeholder="Product Name"
            required
            />

            <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control mb-3"
            placeholder="Product Description"
            required
            />

            <div className="d-flex gap-2">
                <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="form-control mb-3"
                required
                >
                    <option value="" disabled>Select Category</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Mugs">Mugs</option>
                    <option value="Stationery">Stationery</option>
                    <option value="Keyring">Keyring</option>
                    <option value="Sweet Trolley">Sweet Trolley</option>
                    <option value="Soft Toy">Soft Toy</option>
                </select>
                <select
                onChange={(e) => setSubCategory(e.target.value)}
                value={subCategory}
                className="form-control mb-3"
                required
                >
                    <option value="" disabled>Select SubCategory</option>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Hogwarts">Hogwarts</option>
                    <option value="Others">Others</option>
                </select>
            </div>

            <input
            onChange={(e) => setImagePath([e.target.value])}
            type="text"
            className="form-control mb-3"
            placeholder="Local Path to Image"
            required
            />

            <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="form-control mb-3"
            placeholder="Product Price"
            required
            />

            <select
            onChange={(e) => setBestseller(e.target.value)}
            value={bestseller}
            className="form-control mb-3"
            required
            >
                <option value="" disabled>Bestseller?</option>
                <option value= "true">Yes</option>
                <option value="false">No</option>
            </select>

            </div>

            <button type="submit" className="btn btn-dark">
            Add to Inventory
            </button>
        </form>
        <div className="text-end">
            <button onClick={()=>{navigate("/admin")}} className="btn btn-dark mt-4">
            Admin Dashboard
            </button>
        </div>
        </div>
    )
}

export default AdminAdd;