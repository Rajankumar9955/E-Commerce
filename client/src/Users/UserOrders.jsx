import { useEffect, useState } from "react";
import BASE_URL from "../config";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';

const UserOrders=()=>{
    
    let userid=localStorage.getItem("userid")
    const [data,setMydata]=useState([]);

    const loadData=async()=>{
        let api=`${BASE_URL}/user/userorders`;       
       try {
              const response=await axios.post(api,{userid:userid}) // const response = await axios.post(api,{userid:userid});
              setMydata(response.data);
              console.log(response.data);
       } catch (error) {
             toast.error(error.response.data.msg)
       }
    }

    useEffect(()=>{
        loadData();
    },[])

    let sno=0;
    const ans=data.map((key)=>{
        sno++;
// converting time in indian standard time
    const isoDate=key.date;
    const date = new Date(isoDate);
    const options = { 
      timeZone: 'Asia/Kolkata',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric', 
      hour12: true
  };
  const DateandTime=date.toLocaleString('en-IN', options);
// ------------------------------------------------------------
        return(
            <>
              <tr>
                <td>{sno}</td>
                <td>
                    <img src={key.proImage} alt="" style={{ width: 60, height: 60 }}/>
                </td>
                <td>{key.products}</td>
                <td>₹{key.amount}</td>
                <td>{key.name}</td>
                <td>{key.userid.contact}</td>
                <td>{key.email}</td>
                <td>
                     <details>
                        <summary>Address</summary>
                         <p><td>{key.userid.address}</td></p>
                      </details>
                </td>
                <td>{key.city}</td>
                <td>{DateandTime}</td>
              </tr>
            
            </>
        )
    })
    return(
        <>
         <div style={{overflowX:"scroll", overflowY:"scroll", scrollBehavior:"smooth"}}>
         <h3 align="center" style={{marginTop:"15px",marginBottom:"15px"}}>Your Order's</h3>
        <Table striped bordered hover   style={{fontSize:"14px"}}>
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
        </div>
       <ToastContainer/>
        </>
    )
}
export default UserOrders;