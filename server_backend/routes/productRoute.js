import express from 'express';
import productModel from "../models/productModel.js";

const productRouter = express.Router();

//get all products
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


// sort only by subcategory
productRouter.post("/subCategory" , async(req,res) =>{
    const {subCategory} = req.body;
    try {
        const products = await productModel.find({ subCategory :  { $in: subCategory}});
        res.status(200).json({products : products});
    } catch (error) {
        console.log(`Error while fetching products by subcategory`, error);
        res.status(500).json({message: error.message});
    }
})


// sort only by category
productRouter.post("/category" , async(req,res) =>{
    const {category} = req.body;
    try {
        const products = await productModel.find({category: { $in: category}});
        res.status(200).json({products: products});
    } catch (error) {
        console.log(`Error while fetching products by category`, error);
        res.status(500).json({message: error.message});
    }
})


// sort by both
productRouter.post("/filter", async (req,res) =>{
    const {category, subCategory} = req.body;
    console.log(category, subCategory);
    try {
        const products = await productModel.find( {
            $and: [
                { category: { $in: category } },
                { subCategory: { $in: subCategory } }
            ]
        }
        );
        res.status(200).json({products: products});
    } catch (error) {
        console.log(`Error while fetching products by category and subcategory`, error);
        res.status(500).json({message: error.message});
    }
})


export default productRouter;