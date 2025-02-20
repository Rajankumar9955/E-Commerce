import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaRegHeart, FaStar } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Css/Details.css'

import BASE_URL from "../config";
import axios from "axios";


const Details=()=>{
    const [mydata,setmydata]=useState({});
    // const [Images, setImages]=useState([]);
    const {id}=useParams();
    
    const loadData= async()=>{
        const api=`${BASE_URL}/product/productdetail`;
        try {
            const response=await axios.post(api,{id:id});
            setmydata(response.data);
            console.log(response.data.images);
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
        <div id="images">
          <img
            src={`${BASE_URL}/${mydata.defaultImage}`} alt="" height="300px"
          />
          {/* <h1>{Images}</h1> */}
          <div id="img-options">
           {Images.map((key)=>{
            return(
                <>
                     <img src={`${BASE_URL}/${key[0]}`} alt="image" height="35"/>
                     <img src={`${BASE_URL}/${key[1]}`} alt="image" height="35"/>
                     <img src={`${BASE_URL}/${key[2]}`} alt="image" height="35"/>
                     <img src={`${BASE_URL}/${key[3]}`} alt="image" height="35"/>
                </>
            )
           })}
          </div>
        </div>


        </div>
        </>
    )
}
export default Details