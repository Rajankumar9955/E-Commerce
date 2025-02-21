import { FaCirclePlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { qntyIncrease, qntyDecrease, proDelete} from "../Redux/cardSlice";

import BASE_URL from "../config";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Cart=()=>{
    const navigate=useNavigate();
    const proData=useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch();

    const QuantityIncrease=(id)=>{
         dispatch(qntyIncrease({id:id}));
    }
  
    const QuantityDecrease=(id)=>{
       dispatch(qntyDecrease({id:id}));
    }
    
    const productDelete=(id)=>{
        dispatch(proDelete({id:id}))
    }

    useEffect(()=>{
        if(!localStorage.getItem("username"))
        {
            navigate("/userlogin")
        }
    },[])
 
    const seedetail=(id)=>{
       navigate(`/details/${id}`);
    }

    let sno=0; 
    let grandTotal=0;
    const ans=proData.map((key)=>{
        sno++;
        grandTotal+=key.productprice*key.qnty;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>
                    <img src={`${BASE_URL}/${key.defaultImage}`}  style={{ width: 60, height: 60 , cursor:"pointer"}} alt="Image" onClick={()=>{seedetail(key.id)}}/>
                </td>
                <td>{key.productname}</td>
                <td>{key.productbrand}</td>
                <td>
                    <details>
                        <summary>Details</summary>
                        <p>{key.description}</p>
                    </details>
                </td>
                <td>₹ {key.productprice}</td>
                <td>
               
               <FaMinus onClick={()=>{QuantityDecrease(key.id)}}  style={{cursor:"pointer"}}/>
               <span className="minus">
                    {key.qnty}
                    </span>
                <FaCirclePlus onClick={()=>{QuantityIncrease(key.id)}}  className="plus" style={{cursor:"pointer"}}/>
                </td>
                <td>₹ {key.productprice*key.qnty}</td>
                <td>
                    <Button variant="danger" onClick={()=>{productDelete(key.id)}}>Remove</Button>
                </td>
            </tr>
            
            </>
        )
    })
    return(
        <>
        <div style={{marginTop:"15px"}}>
           <Table striped bordered hover style={{fontSize:"12px"}}>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Image</th>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Description</th>
          <th>Price</th>
          <th> Quantity </th>
          <th> Total Amount</th>
          <th> Delete</th>
        </tr>
      </thead>
      <tbody>
       {ans}

       <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>  </th>
          <th> </th>
          <th></th>
          <th width="200" style={{color:"green", fontSize:"20px"}} colspan="1"> Grand Total:  </th>
          <th style={{color:"green", fontSize:"20px"}}>₹ {grandTotal}.00 </th>
          <td><button style={{backgroundColor:"green",width:"90px",padding:"5px",borderRadius:"10px"}} onClick={()=>{navigate("/checkout")}}>Check-Out</button></td>
        </tr>
      </tbody>
      </Table>
      </div>
        </>
    )
}
export default Cart;