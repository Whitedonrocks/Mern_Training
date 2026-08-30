import User from '../model/user.js';
import createToken from '../utils/createToken.js';

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

const login=async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user) return res.status(404).send({error: "User is not registered!"});
    if(await user.comparePassword(password)){
        createToken(user._id,res);
        res.send({
            message:"Login Sucessfull!",
            user:{
                fullname:user.fullname,
                email:user.email,
                isAdmin:user.isAdmin,
            }
        })
    }
}

const logout=async (req,res)=>{
    res.clearCookie('jwt');
    return res.send({message:'Logged Out!'});
}

export {signup,login,logout};