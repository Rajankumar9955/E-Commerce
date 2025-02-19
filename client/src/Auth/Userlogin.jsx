
import { Link } from "react-router-dom";
import "../Css/SignUpAndLogin.css";
import BASE_URL from "../config";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Userlogin=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userRole, setUserRole] = useState("");
    const navigate=useNavigate();
console.log(email,password,userRole)




    const handleSubmit=async(e)=>{
        e.preventDefault();
        const api=`${BASE_URL}/user/userlogin`;
        if (userRole=="user")
        {
        try {
             const response= await axios.post(api, {email:email, password:password});
             console.log(response);
           } catch (error) {
            console.log(error)
        }
    }
    }
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
                    Dont have an account? <Link to="/usersingup" className="signup-link">Sign Up</Link>
                </p>
            </div>
        </div>
        </>
    )
}
export default Userlogin;