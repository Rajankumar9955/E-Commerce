
const ProductModel=require("../Models/ProductModel")


const ProductInsert=async(req,res)=>{
  const imgurl=req.files.map(file=>file.path);
  const {category,subcategory, productname, productbrand, productprice,description, images,defaultImage}=req.body;
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
    res.status(200).send("Data Added Successfully")
  } catch (error) {
    console.log(error)
  }
}

module.exports={
    ProductInsert
}