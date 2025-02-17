
const ProductModel=require("../Models/ProductModel")
const ProductShowOnHomePage=async(req,res)=>{
       try {
        const product=await ProductModel.find({status:"primary"});
        res.status(200).send(product)
       } catch (error) {
        console.log(error)
       }
}
module.exports={
    ProductShowOnHomePage
}