import express from 'express';
import productModel from "../models/productModel.js";

const productRouter = express.Router();

//get al products
productRouter.get("/collections" , async(req,res) =>{
    try {
        const products = await productModel.find({});
        res.status(200).json({products: products});
    } catch (error) {
        console.log("Error while fetching all products: ", error);
        res.status(500).json({message: error.message});
    }
})


// get specific product
productRouter.get("/:id" , async(req,res) =>{
    try {
        const product = await productModel.findById(req.params.id).select("-__v");
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.status(200).json({product: product});
    } catch (error) {
        console.log("Error while fetching product: ", error);
        res.status(500).json({message: error.message});
    }
})

productRouter.get("/subCategory/:subCategoryName" , async(req,res) =>{
    try {
        const products = await productModel.find({ subCategory : req.params.subCategoryName});
        res.status(200).json({products : products});
    } catch (error) {
        console.log(`Error while fetching products by subcategory: ${req.params.subCategoryName}`, error);
        res.status(500).json({message: error.message});
    }
})

productRouter.get("/category/:categoryName" , async(req,res) =>{
    try {
        const products = await productModel.find({category: req.params.categoryName});
        res.status(200).json({products: products});
    } catch (error) {
        console.log(`Error while fetching products by category : ${req.params.categoryName} `, error);
        res.status(500).json({message: error.message});
    }
})


export default productRouter;