
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  Dropdown } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';

import imglogo from "../Images/logo.jpg"
import wish from "../Images/wish.jpg"
import { useSelector } from "react-redux";

import { useContext } from "react";
import { myLoginContext } from "../Context/LoginContext";
const MenuBar=()=>{
    const [showDropdown, setShowDropdown] = useState(false);

    const productData=useSelector(state=>state.mycart.cart);
    const prolength=productData.length

    const {isLogedIn, setIsLogedIn}=useContext(myLoginContext);

    const logout=()=>{
      localStorage.clear();
      setIsLogedIn(false);
    }
    return(
        <>

         <div id="topmenu">
        <Navbar expand="lg" className="bg-body-tertiary" style={{}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{marginLeft:"20px",fontWeight:"bold"}}> <img src={imglogo}  height="50" alt="" /> </Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link}to="products">Products</Nav.Link>
            <Nav.Link as={Link}to="shop">Shop</Nav.Link>
            <Nav.Link as={Link}to="sale">Sale</Nav.Link>
            <NavDropdown title="Brands" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="apple">Apple</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="samsung">Samsung</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="vivo">Vivo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="realme">Realme</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="puma">Puma</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="bata">Bata</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link}to="premiumproduct">
                Premium Product's 
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
         
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-success" style={{marginRight:"20px"}}>Search</Button>
          </Form>
         
          <Nav className="d-flex gap-3">
            {/* DROPDOWN */}
            <Dropdown show={showDropdown} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              <Nav.Link className="d-flex align-items-center " onClick={() => setShowDropdown(!showDropdown)}>
                {isLogedIn?(<>
                  <FaUserCheck  size={28} className="cursor-pointer mt-1 " />
                </>):(<>
                  <FaUserAltSlash size={28} className="cursor-pointer mt-1 " />
                </>)}
              
              </Nav.Link>
              <Dropdown.Menu>
                {isLogedIn?(<>
                             <Dropdown.Item as={Link} to="/userlogin">
                                        Welcome: <span style={{color:"green"}}>{localStorage.getItem("username")}</span>
                                  </Dropdown.Item>
                                <Dropdown.Item  onClick={logout}>
                                       Logout!
                                 </Dropdown.Item>
                </>):(<>
                  <Dropdown.Item as={Link} to="/userlogin">Login</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/usersignup">Signup</Dropdown.Item>
                </>)}
                
              </Dropdown.Menu>
            </Dropdown>
            </Nav>


            <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
              <button style={{textDecoration:"none",border:"none", marginRight:"5px",backgroundColor:"white"}}><FaShoppingCart size={25}/><sup id="cart-count">{prolength}</sup></button>
            </Nav.Link>

            <Nav.Link as={Link} to="wishlist" className="d-flex align-items-center">
              <img src={wish} alt="Wishlist" width="30" height="30"  style={{marginRight:"15px"}}/>
            </Nav.Link>



             <div style={{height:"50px"}}>
             <p style={{marginBottom:"8px",marginTop:"5px",color:"green",fontSize:"18px",marginLeft:"5px"}}>Welcome</p>
             <NavDropdown title="" id="navbarScrollingDropdown">
              <NavDropdown.Item ><button id="logout">Log-out</button></NavDropdown.Item>
           </NavDropdown>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
        </>
    )
}
export default MenuBar