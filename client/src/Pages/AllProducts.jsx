

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
  const navigate=useNavigate();
  const {id}=useParams()
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

const detail=(id)=>{
  navigate(`/details/${id}`);
}

const SingleOrder=(id)=>{
  navigate(`/singleproductorder/${id}`)
}
const ans=mydata.map((key)=>{
  return(
      <>
    <div id="item-details" style={{border:"2px solid black", borderRadius:"5px"}}>
         <div id="images">
            <div id="image-div">
          <img src={`${BASE_URL}/${key.defaultImage}`} alt="" height="300px" id="orignalimage" onClick={()=>{detail(key._id)}}/>
            </div>
            
          {/* <div id="img-option">

                     <img src={`${BASE_URL}/${Image[0]}`} alt="image" height="35"/>
                     <img src={`${BASE_URL}/${Image[1]}`} alt="image" height="35"/>
                     <img src={`${BASE_URL}/${Image[2]}`} alt="image" height="35"/>
                     <img src={`${BASE_URL}/${Image[3]}`} alt="image" height="35"/>
          </div> */}
        </div>


        <div id="contents">
          <b id="pro-name">{key.productname}</b>
          <b id="description">{key.description}</b>
          <b>Brand : {key.productbrand}</b>
          <b>Category : {key.category}</b> 
          <b>Subcategory : {key.subcategory}</b>
          <b id="price">
            Price : ₹{key.productprice} 
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
                    id: key._id,
                    name: key.productname,
                    brand: key.productbrand,
                    price: key.productprice,
                    description: key.description,
                    category: key.category,
                    subcategory: key.subcategory,
                    images: key.images,
                    defaultImage: key.defaultImage,
                    ratings: key.rating,
                    status: key.status,
                    qnty: 1,
                  })
                );
              }}
            >
              {" "}
              <i class="fas fa-plus" /> Add to Cart
            </Button>
            <Button
              size="sm"
              variant="danger"
              onClick={() => {
                dispatch(
                    addtowishlist({
                    id: key._id,
                    name: key.productname,
                    brand: key.productbrand,
                    price: key.productprice,
                    description: key.description,
                    category: key.category,
                    subcategory: key.subcategory,
                    images: key.images,
                    defaultImage: key.defaultImage,
                    ratings: key.rating,
                    status: key.status,
                    qnty: 1,
                  })
                );
              }}
            >
              <i class="fas fa-heart" style={{height:"100px"}}></i><FaRegHeart style={{width:"60px"}}/>
            </Button >
            <Button size="large" variant="warning" onClick={()=>{SingleOrder(key._id)}}>
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      </>
  )
})

  return(
  <>
   <h3 align="center">All Products</h3>
  <Row>
    <Col md="3" >
          <div style={{border:"2px solid black", height:"600px", marginTop:"34px",borderRadius:"5px"}}>
                        



                        jkljnhkvgnvjkhkvjgnvhvcjhgc
          </div>
    </Col>
    <Col md="9">{ans}</Col>
  </Row>
  
  </>)
}
export default AllProduct;




