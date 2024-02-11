import mongoose  from "mongoose";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "./../model/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});


const createProduct = asyncHandler(async (req, res) => {
  const randomUserId = new mongoose.Types.ObjectId(); 
  const product = new Product({
    name: req.body.name,
    price: 0,
    user: randomUserId,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});


export {getProducts , getProductById ,createProduct}