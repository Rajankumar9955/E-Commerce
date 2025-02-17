



const express=require("express");
const route=express.Router();

const ProductControllers=require("../Controllers/ProductControllers")

route.get("/homeproductdisplay", ProductControllers.ProductShowOnHomePage);


module.exports=route;