import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const port=3000;
app.listen(port, ()=>{
    console.log(`server started on port ${port}`)
});