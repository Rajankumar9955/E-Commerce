

const UserModel=require("../Models/UserModel")
const jwt =require("jsonwebtoken")
const ProductOrder=require("../Models/ProductOrders")
const UserSignUp=async(req,res)=>{
    const {name,address, city,contact,email,password,confirmPassword}=req.body;
    try {
        if(password!=confirmPassword)
        {
            res.status(400).send({msg:"Password doesn't Match"});
        }
        const User=await UserModel.create({
            name, 
            address, 
            city, 
            contact,  
            email, 
            password
        })
        res.status(200).send({msg:"User Successully Registered!"})
    } catch (error) {
        console.log(error)
    }
}
const UserLogin=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const User=await UserModel.findOne({email:email});
        if(!User){
            res.status(400).send({msg:"Invalid Email!"})
        }
        if(User.password!=password)
        {
            res.status(400).send({msg:"Invalid Password!"})
        }
        const token=await jwt.sign({id:User._id}, process.env.JWT_SECRET, { expiresIn: '7 days'});
        res.status(200).send({token:token})

    } catch (error) {
        console.log(error)
    }
}
const UserProfile=async(req,res)=>{
       const token=req.header('Authorization');
       try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET,);
            // console.log(decoded);
           const user=await UserModel.findById(decoded.id)
        //    console.log(user)
           res.status(200).send(user);
       } catch (error) {
        console.log(error)
       }
}
const GetUserDetail=async(req,res)=>{
    const {id}=req.body;
    // console.log(req.body);
    try {
        const Details=await UserModel.findById(id);
        res.status(200).send(Details);
    } catch (error) {
        console.log(error)
    }
}
const UserOrders=async(req,res)=>{
    const {userid}=req.body;
    try {
        const data=await ProductOrder.find({userid:userid}).populate("userid")
        res.status(200).send(data); 
    } catch (error) {
        res.status(400).send({msg:"Something Went Wrong!"});
    }
}
const UserDetails=async(req,res)=>{
     const {userid}=req.body;
     try {
        const userdetails=await UserModel.findById(userid);
        // console.log(userdetails);
        res.status(200).send(userdetails);
     } catch (error) {
        console.log(error);
     }
}
module.exports={
    UserSignUp,
    UserLogin,
    UserProfile,
    GetUserDetail,
    UserOrders,
    UserDetails

    
}