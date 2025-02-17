import { useState, useEffect } from "react";
import BASE_URL from "../config";
import "../Css/ProductCard.css";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { PiCurrencyInrThin } from "react-icons/pi";
import axios from "axios";




const ProductCard=()=>{
    const [mydata, setMydata]= useState([]);
 
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

const ans=mydata.map((key)=>{
            return(
                <>
              <div className="product-card">
                    <div className="image-container">
        <img src={`${BASE_URL}/${key.defaultImage}`} alt={key.name} className="product-image" />
               <FaRegHeart className="wishlist-icon" />
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
                       
                        <button className="add-to-cart"
            
                        >Add to Cart</button>
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