
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

module.exports={
    ProductShowOnHomePage,
    ProductDetails,
    SingleProductOrder,
    
}