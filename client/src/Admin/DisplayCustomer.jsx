
import { useState,useEffect } from "react";
import BASE_URL from "../config";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

const DisplayCustomer=()=>{
         const [name,setName]=useState("");
         const [searchData,setSearchData]=useState([])

    const [mydata,setMydata]=useState([]);


    const loadData=async()=>{
        let api=`${BASE_URL}/admin/displaycustomer`;
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

    const handleSearch=async()=>{
      try {
          let api=`${BASE_URL}/admin/customerSearch`;
          const response=await axios.post(api,{name:name})
          setSearchData(response.data);
      } catch (error) {
        console.log(error.response.data.msg)
      }
    }

    
     let s=0;
    const search=searchData.map((key)=>{
      s++;
       return(
        <>
           <tr>
            <th>{s}</th>
            <th>{key.name}</th>
            <th>{key.address}</th>
            <th>{key.city}</th>
            <th>{key.contact}</th>
            <th>{key.email}</th>
           </tr>
        </>
       )
    })

    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
               <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.address}</td>
                <td>{key.city}</td>
                <td>{key.contact}</td>
                <td>{key.email}</td>
               </tr>
            </>
        )
    })

    
  
    return(
        <>
        
        <div style={{overflowX:"scroll", overflowY:"scroll", scrollBehavior:"smooth",height:"525px"}}>
         <h3 align="center" style={{marginTop:"15px",marginBottom:"15px"}}>All Customer's</h3>
         {/* search section */}
         <div style={{width:"100%"}}>
        <div style={{width:"360px",margin:"auto",marginTop:"10px",marginBottom:"10px"}}>
          <Form className="d-flex" >
            <Form.Control type="text" placeholder="Search" className="me-2" aria-label="Search" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <Button variant="outline-success" style={{marginRight:"20px"}} onClick={handleSearch}>Search</Button>
          </Form>
        </div>
        </div>
        <Table striped bordered hover   style={{fontSize:"14px"}}>
      <thead>
        <tr>
          <th>sno</th>
          <th>Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Contact</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {search}
      <hr />
       {ans}
        
        
      
          

             
        
        
        
        </tbody>
        </Table>
       </div>
        </>
    )
}
export default DisplayCustomer