import Users from "./model/user.js";
import Product from "./model/products.js";
import Order from "./model/order.js";
import mongoos from "mongoose";
// dummy data 
import products from "./data/products.js";
import users from "./data/users.js";

mongoos
    .connect(process.env.MONGODB_URL)
    .then((conn)=>console.log(`Connected to db at ${conn.connection.host}`))
    .catch((err)=>console.log("Error connecting to DB",err.message));

const loadData=async()=>{
    try {
        await Users.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        const addedUsers= await Users.insertMany(users);
        const adminId=addedUsers[0]._id;
        const addedProducts=await Product.insertMany(products.map((p)=>({...p,user:adminId})));
        console.log("Data Loaded Successfully......");
        process.exit(0);
    }
    catch (err) {
        console.log("Error loading data",err.message);
        process.exit(1);
    }

}

const destroyData=async()=>{
    try {
        await Users.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log("DB Cleared Successfully");
        process.exit(0);
    }
    catch (err) {
        console.log("Error destroying data",err.message);
        process.exit(1);
    }

}
loadData();