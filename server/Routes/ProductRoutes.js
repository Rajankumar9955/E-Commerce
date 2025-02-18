



const express=require("express");
const route=express.Router();

const ProductControllers=require("../Controllers/ProductControllers")

route.get("/homeproductdisplay", ProductControllers.ProductShowOnHomePage);
route.post("/productdetail", ProductControllers.ProductDetails);


module.exports=route;