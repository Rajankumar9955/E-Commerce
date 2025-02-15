// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Link,Outlet } from 'react-router-dom';


// import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import { FaHome, FaPlus, FaTable,FaEdit, FaSignOutAlt } from "react-icons/fa";


// import "../Css/AdminDashboard.css"
// import AdminNavBar from './AdminNavbar';
// const AdminDashboard=()=>{
//     return(
//         <>
// <div id='admin'>
//   
//       <Row>
//         <Col md="3">
//              <div id='admindashboard'>
//              <ul className="sidebar-menu">
//                     <li><Link to="dashboard" className="active" ><FaHome /> Dashboard</Link></li>
//                     <li><Link to="insertproduct"  className="active"><FaPlus /> Add Product</Link></li>
//                     <li><Link to="displaycustomer"className="active"><FaTable /> Display Customers</Link></li>
//                     <li><Link to="customerorders" className="active"><MdOutlineProductionQuantityLimits />Customer Orders</Link></li>
//                     <li><Link to="updateproducts" className="active"><FaEdit /> Update Products</Link></li>
//                     <li><Link to="updatecustomer" className="active"><FaEdit /> Update Customers</Link></li>
//                     <li><Link to="/"  className="active"><FaSignOutAlt /> Logout</Link></li>
//                 </ul>
//             </div>
        
        
//         </Col>
//         <Col md="9"> 
//                 <div>
//                      <Outlet />
//                 </div>
//         </Col>

//       </Row>
//       </div>

//         </>
//     )
// }
// export default AdminDashboard






import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/AdminDashboard.css";
import user from "../images/user.jpg";
import logo from "../images/logo1.jpg";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import { FaBars, FaTimes, FaHome, FaPlus, FaTable,FaEdit, FaSignOutAlt } from "react-icons/fa";

const AdminDashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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
                    <li><Link to="insertproduct"><FaPlus /> Add Product</Link></li>
                    <li><Link to="displaycustomer"><FaTable /> Display Customers</Link></li>
                    <li><Link to="customerorders"><MdOutlineProductionQuantityLimits />Customer Orders</Link></li>
                    <li><Link to="updateproducts"><FaEdit /> Update Products</Link></li>
                    <li><Link to="updatecustomer"><FaEdit /> Update Customers</Link></li>
                    <li><Link to="/" className="logout"><FaSignOutAlt /> Logout</Link></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className={`main-content ${menuOpen ? "full" : ""}`}>
                <header>
                    <FaBars className="menu-toggle" onClick={() => setMenuOpen(true)} />
                    <h3 className="user-dash">DASHBOARD </h3>
                    <div className="user-info">
                        <img src={user} alt="User Icon" className="user-icon" />
                    </div>
                </header>

                <div>

                    <Outlet />

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;