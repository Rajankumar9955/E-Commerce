
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import BASE_URL from "../config";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SingleProductOrder=()=>{
  const userid=localStorage.getItem("userid")
  const [userData,setUserData]=useState({});
  
  const loadUserData=async()=>{
    try {
       const api=`${BASE_URL}/user/userDetail`;
       const response=await axios.post(api,{userid:userid})
       setUserData(response.data);
       console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    loadUserData();
  },[])

  const {id}=useParams();
  const [data, setData]=useState({});
    
     const loadData=async()=>{
         try {
            const api=`${BASE_URL}/product/singleproductorder`;
            const response=await axios.post(api, {id:id});
            setData(response.data);
         } catch (error) {
            console.log(error)
         }
     }

     useEffect(()=>{
       loadData();
     },[])
    
     let totalAmount=data.productprice;
     let  myProImg=`${BASE_URL}/${data.defaultImage}`;
     let myProList=data.productname;

     const Alldata = {
      name:userData.name,
      mobile:userData.contact,
      email:userData.email,
      adress:userData.address,
      city:userData.city,
      productImage:myProImg,
      products:data.productname,
      userid:userid
    }
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
        const {data} = await axios.post(orderURL,{amount: totalAmount, ...Alldata});
        console.log(data);
        initPay(data.data);
      } catch (error) {
        console.log(error);
      }
    };
  return(
    <>
    <div style={{marginTop:"25px"}}>
       <Container>
      <Row>
        <Col>
          
        <Form style={{width:"400px"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control type="text" value={userData.name} style={{backgroundColor:"#f4eded"}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Customer Contact no</Form.Label>
          <Form.Control type="text" value={userData.contact} style={{backgroundColor:"#f4eded"}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="text" value={userData.email} style={{backgroundColor:"#f4eded"}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control type="text" value={userData.address} style={{backgroundColor:"#f4eded"}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" value={userData.city} style={{backgroundColor:"#f4eded"}} />
        </Form.Group>
      </Form>
            
        </Col>
        <Col>
        <Table striped bordered hover style={{fontSize:"12px",marginLeft:"20px"}}>
        <thead>
          <tr>
          
            <th>Image</th>
            <th>Product Name</th>
            <th>Product Brand</th>
            <th>description</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
              
              <tr>
               
                <td>
                  <img src={`${BASE_URL}/${data.defaultImage}`} style={{ width: 50, height: 50 }} alt="" />
                </td>
                <td>{data.productname}</td>
                <td>{data.productbrand}</td>
                <td>
                  <details>
                    <summary>Details</summary>
                    <p>{data.description}</p>
                  </details>
                </td>

                
                <td>₹{data.productprice}</td>
              </tr>
        </tbody>
        <tr >
          <th></th>
          <th></th>
          <th>  <Button style={{backgroundColor:"yellow",color:"black"}} size="sm" onClick={handlePay}>Shop Now!</Button></th>
          <th></th>
          <th></th>
        </tr>

        </Table>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  )
}
export default SingleProductOrder