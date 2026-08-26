import express from 'express';
import {signup} from "../controller/user.controller.js";

const router=express.Router();

// /api/auth/signup
router.post("/signup",signup);

export default router;