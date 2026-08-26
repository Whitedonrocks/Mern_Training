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
        res.status(404).send({error: "Product not found !"});
    }
};

const updateProduct=async (req,res)=>{
    const {id}=req.params;
    const {name,price,category,brand,image,description}=req.body;
    const product=await Product.findById(id);

    if(!product) return res.status(404).send({error:"Product not Found"});

    product.name=name||product.name;
    product.price=price||product.price;
    product.category=category|| product.category;
    product.brand=brand||product.brand;
    product.image=image||product.image;
    product.description=description||product.description;
    await product.save();
    res.send({message:"Product Updated!"});
};

const deleteProduct=async (req,res)=>{
    const {id}=req.params;
    const product=await Product.findByIdAndDelete(id);

    if(!product) return res.status(404).send({error:"Product not Found"});
    else
        res.send({message:"Product deleted sucessfully"});
};
export {getProducts,getProductById,addProduct,updateProduct,deleteProduct};