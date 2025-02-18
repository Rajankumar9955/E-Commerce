import { FaCirclePlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { qntyIncrease, qntyDecrease} from "../Redux/cardSlice";

import BASE_URL from "../config";

const Cart=()=>{
    const proData=useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch();

    const QuantityIncrease=(id)=>{
         dispatch(qntyIncrease({id:id}));
    }
  
    const QuantityDecrease=(id)=>{
       dispatch(qntyDecrease({id:id}));
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
                    <img src={`${BASE_URL}/${key.defaultImage}`}  style={{ width: 60, height: 60 }} alt="Image" />
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
                    <Button variant="danger">Remove</Button>
                </td>
            </tr>
            
            </>
        )
    })
    return(
        <>
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
          <th width="200" style={{color:"green", fontSize:"20px"}}> Grand Total:  </th>
          <th style={{color:"green", fontSize:"20px"}}>₹{grandTotal}.00 </th>
          <td><button style={{backgroundColor:"green",width:"90px",padding:"5px",borderRadius:"10px"}} >₹ Pay</button></td>
        </tr>
      </tbody>
      </Table>
        </>
    )
}
export default Cart;