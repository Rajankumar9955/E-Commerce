
const ProductModel=require("../Models/ProductModel")
const ProductShowOnHomePage=async(req,res)=>{
       try {
        const product=await ProductModel.find({status:"primary"});
        res.status(200).send(product)
       } catch (error) {
        console.log(error)
       }
}
const ProductDetails=async(req,res)=>{
    const {id}=req.body;
    try {
        const details=await ProductModel.findById(id);
        res.status(200).send(details);
    } catch (error) {
        console.log(error);
    }
}
const SingleProductOrder=async(req,res)=>{
    const{id}=req.body;
    try {
         const Single=await ProductModel.findById(id)
         res.status(200).send(Single);
    } catch (error){
        console.log(error);
    }
}
const ShowAllProducts=async(req,res)=>{
    try {
        const show=await ProductModel.find()
        res.status(200).send(show);
    } catch (error) {
        console.log(error)
    }
}
const ShowRelatedProduct=async(req,res)=>{
      console.log(req.body);
      res.send("okk")
}
module.exports={
    ProductShowOnHomePage,
    ProductDetails,
    SingleProductOrder,
    ShowAllProducts,
    ShowRelatedProduct
}