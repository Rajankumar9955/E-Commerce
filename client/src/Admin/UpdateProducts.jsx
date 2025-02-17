
import { useState,useEffect } from "react";
import BASE_URL from "../config";
import Table from 'react-bootstrap/Table';
import axios from "axios";
const UpdateProduct=()=>{
    const [mydata,setMydata]=useState([]);


    const loadData=async()=>{
        let api=`${BASE_URL}/admin/updateproducts`;
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

    const ans=mydata.map((key)=>{
    return(
        <>
        <tr>
            <td>
                <img src={`${BASE_URL}/${key.defaultImage}`} style={{ width: 50, height: 50 }} alt="Images" />
            </td>
            <td>{key.productname}</td>
            <td>{key.productbrand}</td>
            <td>
                   <details>
                   <summary>Details</summary>
                    <p>{key.description}</p>
                   </details>
            </td>
            <td>{key.productprice}</td>
            <td>{key.category}</td>
            <td>{key.subcategory}</td>
            <td>{key.status}</td>
            <td>{key.rating}</td>

        </tr>
        
        </>
    )
    })
    return(
        <>
        <h1 align="center">UpdateProduct</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>image</th>
          <th>Product Name</th>
          <th>Product Brand</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Sub Category</th>
          <th>Status</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </>
    )
}
export default UpdateProduct;