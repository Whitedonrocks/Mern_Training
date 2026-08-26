import User from '../model/user.js';

const signup = async (req,res)=>{
    const {fullname,email,password,isAdmin}=req.body;
    const user= await User.findOne({email});
    if(user) return res.status(400).send({error:"User already exists"});
    const newUser=await User.create({fullname,email,password,isAdmin});
    res.send({
        message:"User created!",
        user:{
            fullname: newUser.fullname,
            email:newUser.email,
            isAdmin:newUser.isAdmin,
        },
    });
}

export {signup};