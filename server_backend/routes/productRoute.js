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


//add new product
productRouter.post("/add", async (req, res) => {
    const {name, description, price, image, category, subCategory, bestseller} = req.body;
    console.log(name, description, price, image, category, subCategory, bestseller);
    try {
        const result = await productModel.insertOne({
            name: name,
            description: description,
            price: price,
            image: image,
            category: category,
            subCategory: subCategory,
            bestseller: bestseller
        });
        console.log("New ObjectId:", result.insertedId);
        res.status(200).json({success: true, insertedId: result.insertedId});
    } catch (error) {
        console.log("Insert failed:", error.message);
        res.status(500).json({success: false, message: error.message});
    }
})

//edit product
productRouter.post("/edit", async (req, res) => {
    const {name, field, value} = req.body;
    console.log(name, field, value);
    try {
        const result = await productModel.updateOne(
            { name: name }, 
            { $set: { [field]: value } }
        );
        res.json({ success: true, result });
        console.log(result);
    } catch (error) {
        console.log("Edit failed:", error.message);
        res.status(500).json({success: false, message: error.message});
    }
})

//delete product
productRouter.post("/delete", async (req, res) => {
    const {name} = req.body;
    try {
        const result = await productModel.deleteOne(
            { name: name }
        );
        res.json({ success: true, result });
    } catch (error) {
        console.log("Delete failed:", error.message);
        res.status(500).json({success: false, message: error.message});
    }
})

export default productRouter;