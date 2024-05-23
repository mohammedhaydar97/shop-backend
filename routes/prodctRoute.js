import express from "express";
import { createProduct, deleteProduct, getProductById, getProducts } from "./../controllers/productController.js";

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
router.route('/').post(createProduct);

router.route('/:id').delete(deleteProduct);

export default router;