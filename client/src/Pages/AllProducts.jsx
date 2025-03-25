

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaRegHeart, FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Css/Details.css';

import BASE_URL from "../config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Redux/cardSlice";
import { addtowishlist } from "../Redux/wishlistSlice";

import { useNavigate } from "react-router-dom";

const AllProduct=()=>{
  const [mydata, setMydata]= useState([]);
  const dispatch=useDispatch();
  
 const loadData=async()=>{
  const api=`${BASE_URL}/product/showallproducts`;
  try {
      const response=await  axios.get(api);
      setMydata(response.data);
      console.log(response.data);
  } catch (error) {
      console.log(error);
  }
 }

useEffect(()=>{
  loadData();
}, [])

const ans=mydata.map((key)=>{
  return(
      <>
    <div className="product-card">
          <div className="image-container">
      <img src={`${BASE_URL}/${key.defaultImage}`} alt="photo" className="product-image" onClick={()=>{detail(key._id)}} />
     <FaRegHeart className="wishlist-icon" 
             onClick={()=>{dispatch(addtowishlist({id:key._id, productname:key.productname, productbrand:key.productbrand, productprice:key.productprice, description:key.description,category:key.category, subcategory:key.subcategory, images:key.images, defaultImage:key.defaultImage, ratings:key.ratings, status:key.status, qnty:1}))}}
     />
          </div>
          <div className="product-info">
              <div className="product-title-price">
                  <h3 className="product-title">{key.productname}</h3>
                  <span className="product-price"> 
                      ₹ {key.productprice}</span>
              </div>
              <p className="product-description">{key.description}</p>
              {/* <div className="product-rating">
                  {[...Array(key.ratings)].map((_, index) => (
                      <FaStar key={index} className="star-icon" />
                  ))}
              </div> */}
              <div className="add-to-cart">
              <Button variant="warning"  className="add-to-cart1" onClick={()=>{SingleOrder(key._id)}}>Shop Now</Button>
              <Button variant="success" className="add-to-cart11"
onClick={()=>{dispatch(addtoCart({id:key._id, productname:key.productname, productbrand:key.productbrand, productprice:key.productprice, description:key.description,category:key.category, subcategory:key.subcategory, images:key.images, defaultImage:key.defaultImage, ratings:key.rating, status:key.status, qnty:1}))}}
              >Add to Cart</Button>
      </div>
          </div>
      </div>
      </>
  )
})

  return(
  <>
   <h3 align="center">All Products</h3>
      {ans}
  </>)
}
export default AllProduct;