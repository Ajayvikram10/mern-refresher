import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req,res) => {

    const sortBy = req.query.sortBy || "price";
    const order = req.query.order === "desc" ? -1 : 1;

    try{
        // const products = await Product.find({});
        const products = await Product.find().sort({[sortBy]: order});
        res.status(200).json({success: true, data: products});

    }catch (error) {
        res.status(500).json({success: false, message:"Server Error"});
    }
};

export const createProducts = async (req,res) => {
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
}

export const updateProducts = async (req,res) => {

    const {id} = req.params; 
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success: false,
            message: "ID to be updated not found"
        });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true}); 
        res.status(200).json({success: true, data: updatedProduct});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"})
    }

} 

export const deleteProduct = async (req,res) => {
    const {id} = req.params;

    console.log("id:" ,id);

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "Product with {id} deleted"})
    }catch(error){
        console.error("Error in deleting" ,error.message);
        res.status(404).json({success:false, message:"Product not found, cannot delete"})
    }

} 

export const getProductById = async (req, res) => {

    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Cannot find product by ID"})
    }

    try {
        const myProduct = await Product.findById(id, product);
        res.status(200).json({success: true, data: myProduct});
    } catch (error) {
        res.status(500).json({success:false, message: "Server Error"})
    }

}

export const getProductCount = async (req, res) => {


    try {
        const count = await Product.countDocuments();
        res.status(200).json({success: true, count});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
}

//  export const sortProductByPrice = async (req, res) => {
    

//     try {
//         const sortBy = req.query.sortBy || "price"; ///default sort by price
//         const order = req.query.order === "desc" ? -1 : 1; //default ascending

//         const products = await Product.find().sort({[sortBy]: order});
//         res.status(200).json({success: true, data: products});
//     } catch (error) {
//         res.status(500).json({success: false, message: "Server Error"});
//     }
//  }