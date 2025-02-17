
import { useState,useEffect } from "react";
import BASE_URL from "../config";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { Button } from "react-bootstrap";
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
            <td>
                {key.status=="normal"?(<>
                    <Button variant="success" onClick={(e)=>{MakePrimary(e,key._id)}}>Make Primary</Button>
                </>
                ):(<>
                <Button variant="warning" onClick={(e)=>{MakeNormal(e,key._id)}}>Make Normal</Button>
                </>)}
            </td>
            <td>
                <Button variant="danger" onClick={(e)=>{ProductDelete(e,key._id)}}>Delete</Button>
            </td>

        </tr>
        
        </>
    )
    })

    const MakePrimary=async(e,id)=>{
       e.preventDefault();
       const api=`${BASE_URL}/admin/productMakePrimary`;
       try {
           const response=await axios.post(api,{id:id})
           console.log(response.data);
       } catch (error) {
        console.log(error)
       }
       loadData()
    }
    const MakeNormal=async(e,id)=>{
        e.preventDefault();
        const api=`${BASE_URL}/admin/productMakeNormal`;
        try {
            const response=await axios.post(api,{id:id})
            console.log(response.data);
        } catch (error) {
         console.log(error)
        }
        loadData()
     }
     const ProductDelete=async(e,id)=>{
        e.preventDefault();
        const api=`${BASE_URL}/admin/deleteProduct`;
        try {
            const response=await axios.post(api,{id:id});
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
        loadData();
     }
    return(
        <>
        <h3 align="center" style={{marginTop:"15px",marginBottom:"15px"}}>UpdateProduct</h3>
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
          <th>Make</th>
          <th>Delete</th>
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