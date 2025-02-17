
const ProductModel=require("../Models/ProductModel")


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
module.exports={
    ProductInsert,
    ProductsUpdate,
    ProductMakePrimary,
    ProductMakeNormal,
    DeleteProduct
}