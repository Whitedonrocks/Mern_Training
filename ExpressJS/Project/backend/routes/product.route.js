import express from 'express'
import {
    addProduct,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct,
} from "../controller/product.controller.js";

const router=express.Router();

router.get("/",getProducts);

router.get("/:id",getProductById);

router.post("/",addProduct);

router.put("/:id",updateProduct);

router.delete("/:id",deleteProduct);

export default router;
