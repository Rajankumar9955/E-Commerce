
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import BASE_URL from "../config";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SingleProductOrder=()=>{
  const userid=localStorage.getItem("userid");

  const [userData,setUserData]=useState({});
  
  const loadUserData=async()=>{
    try {
       const api=`${BASE_URL}/user/userSinglePurchase`;
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

  return(
    <>
       <Container>
      <Row>
        <Col>
          
          {userData.name};
            
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
              {userid}
        </tbody>
        </Table>
        </Col>
      </Row>
    </Container>
      
      
      
    </>
  )
}
export default SingleProductOrder