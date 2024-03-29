import express from "express";
import { createProduct, getProductById, getProducts } from "./../controllers/productController.js";

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
router.route('/').post(createProduct);


export default router;