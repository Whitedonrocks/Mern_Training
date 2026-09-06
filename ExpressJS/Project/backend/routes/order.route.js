import express from 'express';
import { getOrders,addOrder,getOrderById,getMyOrders,payOrder,deliverOrder} from '../controller/order.controller.js';
import { checkAuth,checkAdmin } from '../middleware/auth.js';

const router=express.Router();

router.get("/",checkAuth,checkAdmin,getOrders);
router.post('/',checkAuth,addOrder);
router.get('/myorders',checkAuth,getMyOrders);
router.get('/:id',checkAuth,getOrderById);
router.put('/:id/pay',checkAuth,checkAdmin,payOrder);
router.put('/:id/deliver',checkAuth,checkAdmin,deliverOrder);

export default router;  