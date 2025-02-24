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

import { useNavigate } from "react-router-dom";
const Details=()=>{
        const navigate=useNavigate() 

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


// Image Hover in details section
// const [showimage, setShowImage] = useState(0);

const showimg1 = (img1) => {
  let im = document.getElementById("orignalimage");
  im.src = img1;
  // setShowImage(1);
};
const showimg2 = (img2) => {
  let im = document.getElementById("orignalimage");
  im.src = img2;
  // setShowImage(1);
};
const showimg3 = (img3) => {
  let im = document.getElementById("orignalimage");
  im.src = img3;
  // setShowImage(1);
};
const showimg4 = (img4) => {
  let im = document.getElementById("orignalimage");
  im.src = img4;
  // setShowImage(1);
};


     
    return(
        <>
         <div id="item-details">
         <div id="images">
            <div id="image-div">
          <img src={`${BASE_URL}/${mydata.defaultImage}`} alt="" height="300px" id="orignalimage" />
            </div>
            
          <div id="img-option">

                     <img src={`${BASE_URL}/${Image[0]}`} alt="image" height="35" onMouseEnter={()=>{showimg1(`${BASE_URL}/${Image[0]}`)}}/>
                     <img src={`${BASE_URL}/${Image[1]}`} alt="image" height="35" onMouseEnter={()=>{showimg2(`${BASE_URL}/${Image[1]}`)}}/>
                     <img src={`${BASE_URL}/${Image[2]}`} alt="image" height="35" onMouseEnter={()=>{showimg3(`${BASE_URL}/${Image[2]}`)}}/>
                     <img src={`${BASE_URL}/${Image[3]}`} alt="image" height="35" onMouseEnter={()=>{showimg4(`${BASE_URL}/${Image[3]}`)}}/>
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
              <i class="fas fa-plus" /> Add to Cart
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
            </Button >
            <Button size="large" variant="warning" onClick={()=>{navigate(`/checkout`)}}>
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