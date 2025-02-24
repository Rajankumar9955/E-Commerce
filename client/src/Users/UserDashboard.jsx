



import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../Css/AdminDashboard.css";
import user from "../Images/user.jpg";
import logo from "../Images/logo1.jpg";
import Button from 'react-bootstrap/Button'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import { FaBars, FaTimes, FaHome, FaPlus, FaTable,FaEdit, FaSignOutAlt } from "react-icons/fa";

const UserDashboard = () => {
    const navigate=useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")


    useEffect(()=>{
        if(localStorage.getItem("username")==null)
        {
            navigate("/userlogin")
        }
        else
        {
            setName(localStorage.getItem("username"));
            setEmail(localStorage.getItem("useremail"));
        }
    },[])

    const UserlogOut=()=>{
        localStorage.clear()
        navigate("/userlogin")
    }
    return (
        <div id="dashboard-container">
            {/* Sidebar */}
            <div className={`sidebar ${menuOpen ? "show" : ""}`}>
                <div className="sidebar-header">
                    <h2>
                        <img  src={logo} style={{
                                width: '170px',
                                height: '60px',
                                margin: '0 auto',
                                display: 'block',
                                cursor:"pointer",
                            }}
                        />
                    </h2>
                    <FaTimes className="close-menu" onClick={() => setMenuOpen(false)} />
                </div>
                <ul className="sidebar-menu">
                    <li><Link to="/dashboard" className="active"><FaHome /> Dashboard</Link></li>
                    <li><Link to="userorders"><MdOutlineProductionQuantityLimits />Your Orders</Link></li>
                    <li><Link to="updateproducts"><FaEdit /> Update Products</Link></li>
                    <li><Link to="updatecustomer"><FaEdit /> Update Customers</Link></li>
                <Button variant="danger" className="logout" style={{marginLeft:"55px"}} onClick={UserlogOut}><FaSignOutAlt />Logout </Button>     
                </ul>
            </div>

            {/* Main Content */}
            <div className={`main-content ${menuOpen ? "full" : ""}`}>
                <header>
                    <FaBars className="menu-toggle" onClick={() => setMenuOpen(true)} />
                    <h3 className="user-dash" >DASHBOARD</h3>
                    <div className="user-info">
                     {/* <Link to="/admindashboard/adminprofile"><img src={user} alt="User Icon" className="user-icon" /></Link>    */}
                    </div>
                </header>

                <div>

                    <Outlet />

                </div>
            </div>
        </div>
    );
};

export default UserDashboard