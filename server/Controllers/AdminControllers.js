
const ProductModel=require("../Models/ProductModel")
const ProductOrderModel=require("../Models/ProductOrders")
const UserModel=require("../Models/UserModel");
const AdminModel=require("../Models/AdminModel")

const ProductInsert=async(req,res)=>{
  const imgurl=req.files.map(file=>file.path);
  const {category,subcategory, productname, productbrand, productprice,description}=req.body;
  try {
    const Save=await ProductModel.create({
        category:category,
        subcategory:subcategory,
        productname:productname,
        productbrand:productbrand,
        productprice:productprice,
        description:description,
        images:imgurl,  
        defaultImage:imgurl[0],
    })
    res.status(200).send({msg:"Data Upload SuccessFully"})
  } catch (error) {
    console.log(error)
  }
}
const ProductsUpdate=async(req,res)=>{
  try {
    const show=await ProductModel.find();
    res.status(200).send(show);
  } catch (error) {
    console.log(error)
  }
   
}
const ProductMakePrimary=async(req,res)=>{
  const {id}=req.body;
  try {
    const primary=await ProductModel.findByIdAndUpdate(id,{status:"primary"});
    res.status(200).send({msg:"Product Updated to Primary"});
  } catch (error) {
    console.log(error)
  }
}

const ProductMakeNormal=async(req,res)=>{
  const {id}=req.body;
  try {
    const normal=await ProductModel.findByIdAndUpdate(id,{status:"normal"});
    res.status(200).send({msg:"Product Updated to Normal"});
  } catch (error) {
    console.log(error)
  }
}
const DeleteProduct=async(req,res)=>{
  const {id}=req.body;
  try {
    const del=await ProductModel.findByIdAndDelete(id);
    res.status(200).send({msg:"Product Deleted!"});
  } catch (error) {
    console.log(error)
  }
}

const CustomerOrderDetails=async(req,res)=>{
     try {
           const Oders=await ProductOrderModel.find();
           res.status(200).send(Oders);
     } catch (error) {
      console.log(error)
     }
}

const DisplayCustomer=async(req,res)=>{
  try {
       const Users=await UserModel.find();
       res.status(200).send(Users);
  } catch (error) {
    console.log(error)
  }
}
const CustomerDelete=async(req,res)=>{
  const {id}=req.body;
  try {
    const del=await UserModel.findByIdAndDelete(id);
    res.status(200).send({msg:"Customer Delete SuccessFully"});
  } catch (error) {
    console.log(error)
  }
}
const AdminLogin=async(req,res)=>{
    const {email, password}=req.body;
    try {
      const Admin=await AdminModel.findOne({email:email});
      if(!Admin)
      {
        res.status(400).send({msg:"Email Doesn't Match"})
      }
      if(Admin.password!=password){
        res.status(400).send({msg:"Invalid Password"});
      }
        res.status(200).send(Admin);
    } catch (error) {
      console.log(error)
    }
}
module.exports={
    ProductInsert,
    ProductsUpdate,
    ProductMakePrimary,
    ProductMakeNormal,
    DeleteProduct,
    CustomerOrderDetails,
    DisplayCustomer,
    CustomerDelete,
    AdminLogin
}