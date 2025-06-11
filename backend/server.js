import express from "express";
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
import Product from "./models/product.model.js";
import mongoose from 'mongoose';
import ProductRoutes from "./routes/products.routes.js";



dotenv.config();

const app = express();

//middleware: allows us to accept json data in req.body
app.use(express.json());

//mongoDB connect string in .env file
console.log(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000 ;

app.use("/api/products" , ProductRoutes );

// app.get("/products", (req,res) => {});


app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT + " hello world!");
});



// mongo creds
// username: chauhanajayvikram1992
// mdlmU9SbGm3OaR3N
// connection string: mongodb+srv://chauhanajayvikram1992:mdlmU9SbGm3OaR3N@cluster0.qrbruid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0