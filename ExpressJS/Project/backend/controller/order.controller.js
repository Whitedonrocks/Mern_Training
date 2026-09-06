import Order from "../model/order.js";

const addOrder=async (req,res)=>{
    const {orderItems,itemPrice,shippingPrice,taxPrice,totalPrice,shippingAddress,paymentMethod}=req.body;
    
    const order=await Order.create({
        user:req.user._id,
        orderItems,
        itemPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
        shippingAddress,
        paymentMethod
    });
    res.send({message:"New Order Created",orderId:order._id});
};

const getOrders=async (req,res)=>{
    const orders=await Order.find().populate("user","fullname email");
    res.send(orders);
};


const getOrderById =async (req,res)=>{
    const {id}=req.params;
    const order=await Order.findById(id);
    if(!order) return res.status(404).send({error:"Order not found!"});
};

const getMyOrders=async (req,res)=>{
    const orders=await Order.find({user:req.user._id});
    res.send(orders);
};

const payOrder=async (req,res)=>{
    const {id}=req.params;
    const order=await Order.findById(id);
    if(!order) return res.status(404).send({error:"Order not found!"});
    order.isPaid=true;
    order.paidAt=Date.now();
    await order.save();
    res.send({message:"Order Paid Sucessfully"});
};

const deliverOrder=async (req,res)=>{
    const {id}=req.params;
    const order=await Order.findById(id);
    if(!order) return res.status(404).send({error:"Order not found!"});
    order.isDelivered=true;
    order.deliveredAt=Date.now();
    await order.save();
    res.send({message:"Order Delivered Sucessfully"});
};

export {addOrder,getOrders,getOrderById,getMyOrders,payOrder,deliverOrder};

