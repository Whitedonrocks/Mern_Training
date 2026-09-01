import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({

        user:{
            type:mongoose.Schema.Types.ObjectId,
            reuired:true,
            ref:"User"
        },
        orderIteam:[{
            name:{
                type :String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            image:{
                type:String,
                default:"/image/sample.jpg"
            },
            quantity:{
                type:Number,
                default:0
            }, 
            product:{
            type:mongoose.Schema.Types.ObjectId,
            reuired:true,
            ref:"Product"
        }
        }],
        itemPrice:{
            type:Number,
            required:true,
            defualt:0
        },
        shippingPrice:{
            type:Number,
            required:true,
            defualt:0
        },
        taxPrice:{
            type:Number,
            required:true,
            defualt:0
        },
        totalPrice:{
            type:Number,
            required:true,
            defualt:0
        },
        shippingAddress:{
            // address:String,   //yesari ni milxa direct
            address:{
                type:String,
                required:true
            },
            city:{
                type:String,
                required:true
            },
            postalCode:{
                type:String,
                required:true
            },
            country:{
                type:String,
                required:true
            }
        },
        paymentMethod:{
            type:String,
            required:true,
            default:"cod"
        },
        isPaid:{
            type:Boolean,
            required:true,
            default:false
        },
        isDelivered:{
            type:Boolean,
            required:true,
            default:false
        },
        paidAt:{
            type:Date
        },
        deliveredAt:{
            type:Date
        }
},
    {timestamps:true}
);

const Order=mongoose.model("Order",orderSchema);

export default Order;