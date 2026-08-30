import express from 'express';
import mongoos from 'mongoose';
import productRouter from './routes/product.route.js';
import UserRouter from './routes/user.route.js';
import logger from './middleware/logger.js';
import cookieParser from 'cookie-parser';

const app= express();

mongoos
    .connect("mongodb://localhost:27017/himalayashop")
    .then((conn)=>console.log(`Connected to db at ${conn.connection.host}`))
    .catch((err)=>console.log("Error connecting to DB",err.message))

app.use(express.json());
app.use(logger);
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send({message:"Server is running"});
})

app.use("/api/products",productRouter);
app.use("/api/auth",UserRouter)


app.listen(3000,()=>console.log("Server is up and running"));

