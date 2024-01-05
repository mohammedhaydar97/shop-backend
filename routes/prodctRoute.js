import express from "express";
import products from "./../products.js";
import asyncHandler from "../middleware/asyncHandlre.js";
import productModel from './../model/productModel.js'
import Product from "./../model/productModel.js";

const router = express.Router();

router.get('/',asyncHandler (async (req, res) => {
    const products = await productModel.find({})
    res.json(products);
}));

router.get('/:id',asyncHandler(async (req, res) => { 
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}));

export default router;