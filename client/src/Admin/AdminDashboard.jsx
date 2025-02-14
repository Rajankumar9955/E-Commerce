import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link,Outlet } from 'react-router-dom';


import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaHome, FaPlus, FaTable,FaEdit, FaSignOutAlt } from "react-icons/fa";


import "../Css/AdminDashboard.css"
import AdminNavBar from './AdminNavbar';
const AdminDashboard=()=>{
    return(
        <>
<div id='admin'>
    <AdminNavBar/>
      <Row>
        <Col md="3">
             <div id='admindashboard'>
             <ul className="sidebar-menu">
                    <li><Link to="dashboard" className="active" ><FaHome /> Dashboard</Link></li>
                    <li><Link to="insertproduct"  className="active"><FaPlus /> Add Product</Link></li>
                    <li><Link to="displaycustomer"className="active"><FaTable /> Display Customers</Link></li>
                    <li><Link to="customerorders" className="active"><MdOutlineProductionQuantityLimits />Customer Orders</Link></li>
                    <li><Link to="updateproducts" className="active"><FaEdit /> Update Products</Link></li>
                    <li><Link to="updatecustomer" className="active"><FaEdit /> Update Customers</Link></li>
                    <li><Link to="/"  className="active"><FaSignOutAlt /> Logout</Link></li>
                </ul>
            </div>
        
        
        </Col>
        <Col md="9"> 
                <div>
                     <Outlet />
                </div>
        </Col>

      </Row>
      </div>

        </>
    )
}
export default AdminDashboard