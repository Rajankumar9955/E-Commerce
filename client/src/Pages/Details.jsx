import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaRegHeart, FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Css/Details.css'

import BASE_URL from "../config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Redux/cardSlice";
import { addtowishlist } from "../Redux/wishlistSlice";

const Details=()=>{
    const dispatch=useDispatch();
    const [mydata,setmydata]=useState({});
    const [Image, setImages]=useState([]);
    const {id}=useParams();
    
    const loadData= async()=>{
        const api=`${BASE_URL}/product/productdetail`;
        try {
            const response=await axios.post(api,{id:id});
            setmydata(response.data);
            setImages(response.data.images);
        } catch (error) {
            console.log(error)
        }
    }
useEffect(()=>{
    loadData();
},[])
     
    return(
        <>
         <div id="item-details">
         <div id="images">
            <div id="image-div">
          <img src={`${BASE_URL}/${mydata.defaultImage}`} alt="" height="300px" />
            </div>
            
          <div id="img-option">

                     <img src={`${BASE_URL}/${Image[0]}`} alt="image" height="35"/>
                     <img src={`${BASE_URL}/${Image[1]}`} alt="image" height="35"/>
                     <img src={`${BASE_URL}/${Image[2]}`} alt="image" height="35"/>
                     <img src={`${BASE_URL}/${Image[3]}`} alt="image" height="35"/>
          </div>
        </div>


        <div id="contents">
          <b id="pro-name">{mydata.productname}</b>
          <b id="description">{mydata.description}</b>
          <b>Brand : {mydata.productbrand}</b>
          <b>Category : {mydata.category}</b> 
          <b>Subcategory : {mydata.subcategory}</b>
          <b id="price">
            Price : ₹{mydata.productprice} 
          </b>
          <b>
            {/* Ratings : {mydata.rating} {desc[mydata.rating]} */}
            </b>
            <h2></h2>
            {/* <div className=" flex justify-content-center">
                <Rating
                  value={mydata.ratings}
                  onChange={(e) => setValue(e.value)}
                  onMouseOver={() => {
                    handleRate(mydata._id);
                  }}
                  cancel={false}
                />
              </div> */}
          
          <div id="btns">
            <Button
              size="sm"
              variant="success"
              onClick={() => {
                dispatch(
                    addtoCart({
                    id: mydata._id,
                    name: mydata.productname,
                    brand: mydata.productbrand,
                    price: mydata.productprice,
                    description: mydata.description,
                    category: mydata.category,
                    subcategory: mydata.subcategory,
                    images: mydata.images,
                    defaultImage: mydata.defaultImage,
                    ratings: mydata.rating,
                    status: mydata.status,
                    qnty: 1,
                  })
                );
              }}
            >
              {" "}
              <i class="fas fa-plus" /> AddtoCart
            </Button>
            <Button
              size="sm"
              variant="danger"
              onClick={() => {
                dispatch(
                    addtowishlist({
                    id: mydata._id,
                    name: mydata.productname,
                    brand: mydata.productbrand,
                    price: mydata.productprice,
                    description: mydata.description,
                    category: mydata.category,
                    subcategory: mydata.subcategory,
                    images: mydata.images,
                    defaultImage: mydata.defaultImage,
                    ratings: mydata.rating,
                    status: mydata.status,
                    qnty: 1,
                  })
                );
              }}
            >
              <i class="fas fa-heart" style={{height:"100px"}}></i><FaRegHeart style={{width:"60px"}}/>
            </Button>
            <Button size="sm" variant="success">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <br />
      {/* <hr />
       <h3 align="center">Related Products !!</h3>
      <hr /> */}
        </>
    )
}
export default Details