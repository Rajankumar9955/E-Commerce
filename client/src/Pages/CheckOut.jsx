import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../config";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { PiCurrencyInr } from "react-icons/pi";
import { FaMoneyCheck } from "react-icons/fa";

import { proDelete, qntyDecrease, qntyIncrease } from "../Redux/cardSlice";


const CheckOut=()=>{
    const [mydata, setMydata] = useState({});
    const navigate= useNavigate();
  
  const proData= useSelector(state=>state.mycart.cart);
  const dispatch= useDispatch();
  
  
  
    useEffect(()=>{
        if (!localStorage.getItem("username"))
        {
          navigate("/userlogin");
        }
  
        loadData();
    }, [])
  
    const loadData=async()=>{
      const api=`${BASE_URL}/user/getuserdetail`;
      const response = await axios.post(api, {id:localStorage.getItem("userid")});
      console.log(response.data);
      setMydata(response.data);
    }
  
  
    let totalAmount=0;
    let myProImg="";
    let myProList="";
    const ans= proData.map((key)=>{
        totalAmount+=key.productprice * key.qnty;
        myProImg=`${BASE_URL}/${key.defaultImage}`;
        myProList+=key.productname+", ";
      return(
        <>
        <tr>
               <td> 
               <img src={`${BASE_URL}/${key.defaultImage}`} style={{ width: 50, height: 50 }} alt="Uploaded File" />
               </td>   
                <td>{key.productname} </td>
                <td> {key.productbrand} </td>
                <td> ₹{key.productprice} </td>
                <td> {key.qnty} </td>
                <td> ₹{key.productprice * key.qnty} </td>
             </tr>
        </>
      )
     })
    
     const [shoe,setShoe] = useState({
      name: "Training Shoes",
      creator: "Nike",
      img: "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 500,
  });
  
    
  const initPay = (data) => {
    const options = {
      key : "rzp_test_xH8lHTk2JMtS8k",
      amount: data.amount,
      currency: data.currency,
      name: myProList,
      description: "Test",
      image:myProImg,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL =`${BASE_URL}/api/payment/verify`;    //https://localhost:8080/api/payment/verify
          const {data} = await axios.post(verifyURL,response);
        } catch(error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  
  
  
  
     const handlePay = async () => {
      try {
        const orderURL = `${BASE_URL}/api/payment/orders`;  //"http://localhost:8080/api/payment/orders
        const {data} = await axios.post(orderURL,{amount: totalAmount,productImage:myProImg,products:myProList,name:mydata.name, 
           contact:mydata.contact,email:mydata.email,address:mydata.address,city:mydata.city});
        console.log(data);
        initPay(data.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    return(
          <> 
            <h1 align="center">  Check out Page </h1>
            <div style={{width:"700px", margin:"auto", display:"flex", justifyContent:"space-between"}}>
            <Form style={{width:"400px"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control type="text" value={mydata.name} style={{backgroundColor:"#f4eded"}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Customer Contact no</Form.Label>
          <Form.Control type="text" value={mydata.contact} style={{backgroundColor:"#f4eded"}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="text" value={mydata.email} style={{backgroundColor:"#f4eded"}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control type="text" value={mydata.address} style={{backgroundColor:"#f4eded"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" value={mydata.city} style={{backgroundColor:"#f4eded"}} />
        </Form.Group>
        
  
        
     
      </Form>
      <div>
  
      <Table striped bordered hover style={{fontSize:"12px",marginLeft:"20px"}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity </th>
            <th>Total Amount</th>
          
          </tr>
        </thead>
        <tbody>
         {ans}
         <tr>
           <th colspan="5"> Net Amount :  </th>
           <th> ₹{totalAmount} </th>
         </tr>
         <tr>
           <th colspan="6"> 
            
           <Button variant="primary" type="submit" onClick={handlePay}>
            Pay Now!
        </Button>
            
            
             </th>
         </tr>
  
       
        </tbody>
        </Table>
  
        
       
       
      </div>
           
           
            </div>
          </>
      )
  }
export default CheckOut;