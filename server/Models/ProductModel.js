

const mongoose=require("mongoose");
const ProductSchema=new mongoose.Schema({
  category:String,
  subcategory:String,
  productname:String,
  productbrand:String,
  productprice:Number,
  description:String,
  images:[String],  
  defaultImage:String,
  rating:{type:Number, default:0},
  status:{type:String, default:'normal'},
})
module.exports=mongoose.model('product', ProductSchema)