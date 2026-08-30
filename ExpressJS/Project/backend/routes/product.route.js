import express from 'express'
import {
    addProduct,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct,
} from "../controller/product.controller.js";
import { checkAuth,checkAdmin } from '../middleware/auth.js';


const router=express.Router();

router.get("/",getProducts);

router.get("/:id",getProductById);

router.post("/",checkAuth,checkAdmin,addProduct);

router.put("/:id",updateProduct);

router.delete("/:id",deleteProduct);

export default router;
