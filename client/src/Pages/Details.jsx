import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaRegHeart, FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Css/Details.css'

import BASE_URL from "../config";
import axios from "axios";


BASE_URL

const Details=()=>{
    const [mydata,setmydata]=useState({});
    const {id}=useParams();
    
    const loadData= async()=>{
        const api=`${BASE_URL}/product/productdetail`;
        try {
            const response=await axios.post(api,{id:id});
            setmydata(response.data);
        } catch (error) {
            console.log(error)
        }
    }
useEffect(()=>{
    loadData();
},[])
     
    return(
        <>
           <div id="details">
             <div id="details1" >
             <Row>
        <Col>
     

             <div id="productcard">
                    <div id="imagecontainer">
        <img src={`${BASE_URL}/${mydata.defaultImage}`} alt="photo" id="productimage" />
               <FaRegHeart className="wishlisticon" 
                    //    onClick={()=>{dispatch(addtowishlist({id:key._id, productname:key.productname, productbrand:key.productbrand, productprice:key.productprice, description:key.description,category:key.category, subcategory:key.subcategory, images:key.images, defaultImage:key.defaultImage, ratings:key.ratings, status:key.status, qnty:1}))}}
               />
                    </div>
                    <div id="imageindex">
                    <div id="imgindex">
                        <img src={`${BASE_URL}/${mydata.images[0]}`} alt="" id="proimage" />
                    </div>
                    <div id="imgindex">
                    <img src={`${BASE_URL}/${mydata.images[1]}`} alt="" id="proimage" />
                    </div>
                    <div id="imgindex">
                    <img src={`${BASE_URL}/${mydata.images[2]}`} alt="" id="proimage" />
                    </div>
                    <div id="imgindex">
                    <img src={`${BASE_URL}/${mydata.images[3]}`} alt="" id="proimage" />
                    </div>
              </div>
                </div>
                </Col>
             <Col>
                    <div id="decriptiondata">
                        <div id="decriptiondata1">
                            <h3>{mydata.productname}</h3>
                           <p>{mydata.description}</p>
                           <h2 align="center">{mydata.productbrand}</h2>
                           <h6></h6>
                        </div>
                    </div>  
             </Col>
             </Row>


             </div>
           </div>
        </>
    )
}
export default Details