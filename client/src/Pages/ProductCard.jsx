import { useState, useEffect } from "react";
import BASE_URL from "../config";
import "../Css/ProductCard.css";
import { FaRegHeart, FaStar } from "react-icons/fa";
import axios from "axios";
import { addtoCart } from "../Redux/cardSlice";
import {useDispatch} from "react-redux"
import Button from 'react-bootstrap/Button';

import { addtowishlist } from "../Redux/wishlistSlice";
import { useNavigate } from "react-router-dom";




const ProductCard=()=>{

    const [mydata, setMydata]= useState([]);
    const dispatch=useDispatch();
   const loadData=async()=>{
    const api=`${BASE_URL}/product/homeproductdisplay`;
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

const navigate=useNavigate();
const detail=(id)=>{
    navigate(`/details/${id}`);
}

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
                        <Button variant="warning"  className="add-to-cart1">Shop Now</Button>
                        <Button variant="success" className="add-to-cart11"
        onClick={()=>{dispatch(addtoCart({id:key._id, productname:key.productname, productbrand:key.productbrand, productprice:key.productprice, description:key.description,category:key.category, subcategory:key.subcategory, images:key.images, defaultImage:key.defaultImage, ratings:key.ratings, status:key.status, qnty:1}))}}
                        >Add to Cart</Button>
                </div>
                    </div>
                </div>
                </>
            )
})
    return(
        <>
              <div className="product-list">
                       {ans}
             </div>
        </>
    )
}
export default ProductCard;