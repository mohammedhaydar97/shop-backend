import mongoose from "mongoose";
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
    price: req.body.price,
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

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const updateReservationIsFalse = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);

  if (reservation) {
    reservation.isTrue = false;

    const updatedReservation = await reservation.save();

    res.json(updatedReservation);
  } else {
    res.status(404);
    throw new Error("Reservation not found");
  }
});

export { createProduct, deleteProduct, getProductById, getProducts , updateReservationIsFalse};

