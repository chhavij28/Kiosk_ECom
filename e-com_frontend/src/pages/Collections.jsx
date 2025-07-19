import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import './Collections.css'
import ProductItem from "../components/ProductItem";
import axios from "axios";


const Collections = () => {

    const [showFilter, setShowFilter] = useState(false);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterProducts.slice(indexOfFirstItem, indexOfLastItem);





    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
        setCategory((prev) => prev.filter((item) => item !== e.target.value));
        } else {
        setCategory((prev) => [...prev, e.target.value]);
        }
    };

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
        setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
        } else {
        setSubCategory((prev) => [...prev, e.target.value]);
        }
    };

    const clearFilters = () => {
        setCategory([]);
        setSubCategory([]);
    };

    const applyFilter = async () => {
        let products = [];
        if(category.length == 0 && subCategory.length ==0){
            await axios.get('http://localhost:3000/api/product/collections')
            .then(response =>{
                console.log("response:", response);
                products = response.data.products;
            })
            .catch(error =>{
                console.log("error fetching products:", error.message);
            })
        }
        if(category.length == 0 && subCategory.length > 0){
            await axios.post('http://localhost:3000/api/product/subCategory', {subCategory: subCategory})
            .then(response => {
                products = response.data.products;
            })
            .catch(error =>{
                console.log("error fetching products by category:", error.message);
            })
        }
        if(category.length > 0 && subCategory.length == 0){
            await axios.post('http://localhost:3000/api/product/category', {category: category})
            .then(response => {
                products = response.data.products;
            })
            .catch(error =>{
                console.log("error fetching products by category:", error.message);
            })
        }
        if(category.length > 0 && subCategory.length > 0){
            await axios.post('http://localhost:3000/api/product/filter', {category: category, subCategory: subCategory})
            .then(response => {
                products = response.data.products;
            })
            .catch(error =>{
                console.log("error fetching products by category:", error.message);
            })
        }
        console.log("list:", products);
        setFilterProducts(products);
    }

    useEffect(() => {
        setCurrentPage(1);
        applyFilter();
    }, [category, subCategory]);



    return (
        <div className="d-flex flex-column flex-sm-row pt-4 border-top gap-1 gap-sm-4 ">
            <div className="container min-w-60 col-12 col-md-2 col-lg-2">
                {/* FILTERS Toggle */}
                <p
                    onClick={() => setShowFilter(!showFilter)}
                    className="d-flex align-items-center gap-2 my-2 fs-4 cursor-pointer"
                    style={{ cursor: 'pointer' }}
                >
                    FILTERS
                    <img
                    className={`d-sm-none ${showFilter ? "rotate-90" : ""}`}
                    style={{ height: '12px' }}
                    src={assets.dropdown_icon}
                    alt="Dropdown"
                    />
                </p>

                {/* Category Filters */}
                <div className={`border border-secondary ps-3 py-3 mt-4 ${showFilter ? "" : "d-none"} d-sm-block`}>
                    <p className="mb-3 small fw-semibold">CATEGORIES</p>
                    <div className="d-flex flex-column gap-2 small fw-light text-secondary">
                    {["Clothing", "Mugs", "Stationery", "Keyring", "Sweet Trolley", "Soft Toy"].map((item) => (
                        <label key={item} className="d-flex gap-2" style={{ cursor: 'pointer' }}>
                        <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value={item}
                            onChange={toggleCategory}
                            checked={category.includes(item)}
                        />
                        {item}
                        </label>
                    ))}
                    </div>
                </div>

                {/* Sub Category Filters */}
                <div className={`border border-secondary ps-3 py-3 my-4 ${showFilter ? "" : "d-none"} d-sm-block`}>
                    <p className="mb-3 small fw-semibold">HOUSES</p>
                    <div className="d-flex flex-column gap-2 small fw-light text-secondary">
                    {["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff", "Hogwarts"].map((item) => (
                        <label key={item} className="d-flex gap-2" style={{ cursor: 'pointer' }}>
                        <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value={item}
                            onChange={toggleSubCategory}
                            checked={subCategory.includes(item)}
                        />
                        {item}
                        </label>
                    ))}
                    </div>
                </div>

                {/* Clear Filters Button */}
                <button
                    className={`btn btn-dark px-4 py-2 mt-1 ${showFilter ? "d-block" : "d-none"} d-sm-block`}
                    onClick={clearFilters}
                >
                    Clear Filters
                </button>
            </div>

            
            {/* View Product Items */}
            <div className="container flex-grow col-12 col-md-10 col-lg-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="fs-2">SHOP COLLECTION</p>
                    {/* Product Sort */}
                    {/* <select
                    onChange={(e) => setSortType(e.target.value)}
                    className="form-select form-select-sm w-auto border border-secondary"
                    >
                    <option value="relevant">Sort by: Relevant</option>
                    <option value="low-high">Sort by: Low to High</option>
                    <option value="high-low">Sort by: High to Low</option>
                    </select> */}
                </div>

                {/* Map Products */}
                <div className="row g-4">
                    {currentItems.map((item, index) => (
                    <div className="col-6 col-md-4 col-lg-3" key={index}>
                        <ProductItem
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        />
                    </div>
                    ))}
                </div>
                <nav aria-label="Page navigation">
                    <ul className="pagination pagination-md justify-content-end mt-4 custom-pagination">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>&lt;</button>
                        </li>
                        {Array.from({ length: Math.ceil(filterProducts.length / itemsPerPage) }, (_, i) => (
                        <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                        </li>
                        ))}
                        <li className={`page-item ${currentPage === Math.ceil(filterProducts.length / itemsPerPage) ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>&gt;</button>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>
    )
}

export default Collections