import express from 'express';
import { getAllProductsController, monthFilterController, productSearchController } from './controllers/productController.js';
const router = express.Router();
router.get("/products-transactions",getAllProductsController);
router.post("/search-products/:keyword",productSearchController);
router.post("/month-filter/:month",monthFilterController);
export default router;