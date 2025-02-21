
import { Link } from "react-router-dom";
import "../Css/SignUpAndLogin.css";
import BASE_URL from "../config";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Userlogin=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userRole, setUserRole] = useState("");
    const navigate=useNavigate();
    console.log(email,password,userRole)


    const handleSubmit=async(e)=>{
        e.preventDefault();
        if (userRole=="user")
        {
        try {
            const api=`${BASE_URL}/user/userlogin`;
             const response= await axios.post(api, {email:email, password:password});
             console.log(response);
             localStorage.setItem("token", response.data.token);
             navigate("/home");
           } catch (error) {
            console.log(error)
        }
    }
    else if(userRole=="admin"){
        try {
        const api=`${BASE_URL}/admin/adminlogin`;
        const response=await axios.post(api,{email:email, password:password});
        console.log(response.data);
        if(response.status==200)
        {
            localStorage.setItem("adminname", response.data.name);
            localStorage.setItem("adminemail", response.data.email);
            navigate("/admindashboard");
        }
        } catch (error) {
            toast.error(error.response.data.msg);
        }
    }
    }
   



    useEffect(()=>{
        if(localStorage.getItem("username"))
        {
            navigate("/home")
        }
    },[])
    return(
        <>
         <div className="signupcontainer" style={{marginTop:"-20px", marginBottom:"-37px"}}>
            <div className="signup-box" style={{}}>
                <h2 className="signup-title">Log In</h2>
                <form className="signup-form">
                    <input type="email" name="email" placeholder="Email" className="signup-input"
                    value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <input type="password" name="password" placeholder="Password" className="signup-input" 
                    value={password} onChange={(e)=>{setPassword(e.target.value)}} />

                        <select  className="signup-input"  name="userrole" value={userRole} 
                        onChange={(e)=>{setUserRole(e.target.value)}}>
                           <option>Select Role</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>


                    

                    <button type="submit" className="signup-button" onClick={handleSubmit}>Login</button>
                </form>
                <p className="signup-text">
                    Dont have an account? <Link to="/usersignup" className="signup-link">Sign Up</Link>
                </p>
            </div>
            <ToastContainer />
        </div>
        </>
    )
}
export default Userlogin;