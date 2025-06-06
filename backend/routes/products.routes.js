import express from "express";
// import Product from "../models/product.model.js";
// import mongoose from "mongoose";

import {getProducts, createProducts, getProductCount} from "../controllers/product.controller.js"
import {updateProducts} from "../controllers/product.controller.js";
import {deleteProduct , getProductById} from "../controllers/product.controller.js";


const router = express.Router();

router.post("/", createProducts);

router.delete("/:id", deleteProduct );

router.get("/getAll", getProducts );

router.get("/count", getProductCount);

router.get("/:id", getProductById);

router.put("/:id", updateProducts);



export default router;