
import { useState,useEffect } from "react";
import BASE_URL from "../config";
import Table from 'react-bootstrap/Table';
import axios from "axios";

const CustomerOrders=()=>{

  const [mydata,setMydata]=useState([]);


    const loadData=async()=>{
        let api=`${BASE_URL}/admin/customerOrders`;
    try {
        const response= await axios.get(api);
        setMydata(response.data);
        console.log(mydata);
    } catch (error) {
        console.log(error)
    }
}
    useEffect(()=>{
        loadData();
    },[])

   let sno=0;
   const ans=mydata.map((key)=>{
    sno++;
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>
          <img src={key.proImage} alt=""style={{ width: 60, height: 60 , cursor:"pointer"}} />
        </td>
        <td>{key.products}</td>
        <td>{key.amount}</td>
        <td>{key.name}</td>
        <td>{key.contact}</td>
        <td>{key.email}</td>
        <td>{key.address}</td>
        <td>{key.city}</td>
        <td>{key.date}</td>
      </tr>
      
      </>
    )
   })
    return(
        <>
          <h3 align="center" style={{marginTop:"15px",marginBottom:"15px"}}>Customer Orders</h3>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>sno</th>
          <th>Image</th>
          <th>Products</th>
          <th>Amount</th>
          <th>Customer_Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Address</th>
          <th>City</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </>
    )
}
export default CustomerOrders