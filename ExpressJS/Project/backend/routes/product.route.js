import express from 'express'
import {
    addProduct,
    getProductById,
    getProducts,
} from "../controller/product.controller.js";

const router=express.Router();

router.get("/",getProducts);

router.get("/:id",getProductById);

router.post("/",addProduct);

export default router;
