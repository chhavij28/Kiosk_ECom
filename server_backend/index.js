import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import productRouter from './routes/productRoute.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//product routes
app.use("/api/product", productRouter);

//connection from mongoose to mongoDB
const connectToDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/kiosk');
        console.log("Connected to MongoDB");
    } catch(error){
        console.log(error);
        process.exit(1);
    }
}
connectToDB();

const port=3000;
app.listen(port, ()=>{
    console.log(`server started on port ${port}`)
});