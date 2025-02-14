
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';

const MenuBar=()=>{
    return(
        <>
         <div id="topmenu">
        <Navbar expand="lg" className="bg-body-tertiary" style={{}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{marginLeft:"20px",fontWeight:"bold"}}>//</Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link}to="products">Products</Nav.Link>
            <Nav.Link as={Link}to="shop">Shop</Nav.Link>
            <Nav.Link as={Link}to="Blog">Blog</Nav.Link>
            <Nav.Link as={Link}to="sale">Sale</Nav.Link>
            <NavDropdown title="Brands" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="eyetech">EyeTech Camera</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="wipro">Wipro Camera</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="ddlc">DDLC Camera</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="daynight">
                Day and Night camera
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link}to="premiumcamera">
                Premium Camera's 
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
         
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-success" style={{marginRight:"20px"}}>Search</Button>
          </Form>
         
          <button style={{border:"none",marginRight:"10px"}}  >< FaUser style={{fontSize:"24px",height:"50px"}}/></button> 
          <button style={{border:"none",marginRight:"10px"}}  ><FaShoppingCart  style={{fontSize:"24px",height:"50px"}}   /><sup style={{fontSize:"20px"}}></sup></button>
             <div style={{height:"50px"}}>
             <p style={{marginBottom:"-8px",marginTop:"5px",color:"green",fontSize:"18px",marginLeft:"5px"}}>Welcome</p>

             <NavDropdown title="" id="navbarScrollingDropdown">
              <NavDropdown.Item ><button id="logout">Log-out</button></NavDropdown.Item>
              <NavDropdown.Divider />
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