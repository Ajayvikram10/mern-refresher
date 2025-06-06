import express from "express";
import dotenv from "dotenv";
import {connectDB} from './config/db.js';
import Product from "./models/product.model.js";


dotenv.config();

const app = express();

//middleware: allows us to accept json data in req.body
app.use(express.json());

app.get("/products", (req,res) => {});


app.post("/api/products", async (req,res) => {
    const product = req.body; //user will send this data

    if(!product.name || !product.price ){
        return res.status(400).json({success: false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product)

    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    }catch(error){
        console.error("Error in create product: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
});


console.log(process.env.MONGO_URI);

app.delete("/api/products/:id", async (req,res) => {
    const {id} = req.params;

    console.log("id:" ,id);

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "Product with {id} deleted"})
    }catch(error){
        console.error("Error in deleting" ,error.message);
        res.status(404).json({success:false, message:"Product not found, cannot delete"})
    }

} );

app.get("/api/products/getAll", async (req,res) => {

    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});

    }catch (error) {
        res.status(500).json({success: false, message:"Server Error"});
    }
});




app.listen(5000, () => {
    connectDB();
    console.log("Server started at 5000 hello");
});



// mongo creds
// username: chauhanajayvikram1992
// mdlmU9SbGm3OaR3N
// connection string: mongodb+srv://chauhanajayvikram1992:mdlmU9SbGm3OaR3N@cluster0.qrbruid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0