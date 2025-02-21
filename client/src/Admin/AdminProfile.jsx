import { useState ,useEffect} from "react"
import user from "../images/user.jpg";
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const AdminProfile=()=>{
    const navigate=useNavigate()
     const [adminEmail, setAdminEmail]=useState("")
        const [adminName, setAdminName]=useState("")
    
    
        useEffect(()=>{
            if(localStorage.getItem("adminname")==null)
            {
                navigate("/userlogin")
            }
            else
            {
                setAdminName(localStorage.getItem("adminname"));
                setAdminEmail(localStorage.getItem("adminemail"))
            }
        },[])
        const AdminLogOut=()=>{
            localStorage.clear()
            navigate("/userlogin");
            toast.error(adminName+"Now You are Logged-Out");
        }
    return(
        <>
         <h3 align="center" style={{marginTop:"30px"}}>Admin Profile</h3>
        <div style={{width:"100%",marginTop:"10px"}}>
                  <div style={{width:"300px", margin:"auto",border:"2px solid black",height:"300px",borderRadius:"15px"}}>
                         <div style={{margin:"auto",textAlign:"center",marginTop:"30px"}}>
                            <img src={user} alt=""  className="user-icon" height="50" />
                            <h3> Welcome:{adminName}</h3>
                            <h6> Email:{adminEmail}</h6>
                            <Button variant="danger" onClick={AdminLogOut} >LogOut</Button>
                         </div>
                  </div>
                  <ToastContainer/>
        </div>
       
        </>
    )
}
export default AdminProfile