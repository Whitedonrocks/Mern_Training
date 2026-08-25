import Product from "../model/products.js";

const getProducts=async (req,res)=>{
    const products=await Product.find();
    res.send(products);
};

const addProduct=async (req,res)=>{
    const newProducts={
        name:'Sample Name',
        price:10,
        description:'Sanple Description',
        brand:'Sample Brand',
        category:'Sample Category'
    };
    const product=await Product.create(newProducts);
    res.send({message:"Product added sucessfully"});
};

const getProductById= async(req,res)=>{
    const id=req.params.id;
    // const {id }=req.params;
    const products=await Product.findById(id);
    if(products){
        res.send(products);
    }else {
        res.status(400).send({error: "Product not found !"});
    }
};

export {getProducts,getProductById,addProduct};