import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import {  FaUser,FaShoppingCart } from 'react-icons/fa';
const MenuBar=()=>{
    return(
        <>
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">

          <InputGroup>
          <InputGroup.Text id="basic-addon1">All</InputGroup.Text>
          <Form.Control
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"/>
               <Button type="submit" variant='success'>Submit</Button>
         </InputGroup>
          </Form>
                   
                   
         <Button style={{marginRight:"10px", marginLeft:"10px"}}><FaUser/></Button>
         <Button style={{marginRight:"10px", marginLeft:"5px"}}><FaShoppingCart/><sup style={{fontSize:"20px"}}>0</sup></Button>


        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default MenuBar