import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link,Outlet } from 'react-router-dom';


import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaHome, FaPlus, FaTable,FaEdit, FaSignOutAlt } from "react-icons/fa";


import "../Css/AdminDashboard.css"
const AdminDashboard=()=>{
    return(
        <>
<div id='admin'>
      <Row>
        <Col md="3">
             <div id='admindashboard'>
             <ul className="sidebar-menu">
                    <li><Link to="dashboard" className="active"><FaHome /> Dashboard</Link></li>
                    <li><Link to="insertproduct" ><FaPlus /> Add Product</Link></li>
                    <li><Link to="displaycustomer"><FaTable /> Display Customers</Link></li>
                    <li><Link to="customerorders"><MdOutlineProductionQuantityLimits />Customer Orders</Link></li>
                    <li><Link to="updateproducts"><FaEdit /> Update Products</Link></li>
                    <li><Link to="updatecustomer"><FaEdit /> Update Customers</Link></li>
                    <li><Link to="/" className="logout"><FaSignOutAlt /> Logout</Link></li>
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