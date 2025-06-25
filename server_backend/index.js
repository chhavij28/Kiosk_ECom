import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

import Expense from './routes/expenses_route.js';
app.use("/api", Expense);

//connection from mongoose to mongoDB
const connectToDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase', {
            //useCreateIndex: true, //make this true
            autoIndex: true, //make this also true
        });
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