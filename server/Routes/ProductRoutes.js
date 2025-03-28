



const express=require("express");
const route=express.Router();

const ProductControllers=require("../Controllers/ProductControllers")

route.get("/homeproductdisplay", ProductControllers.ProductShowOnHomePage);
route.post("/productdetail", ProductControllers.ProductDetails);
route.post("/singleproductorder", ProductControllers.SingleProductOrder);
route.get("/showallproducts", ProductControllers.ShowAllProducts);
route.post("/showRelatedProduct", ProductControllers.ShowRelatedProduct);


module.exports=route;