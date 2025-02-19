import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import imglogo from "../Images/logo.jpg"


const TopBar=()=>{
      
    return(
        <>
       <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={imglogo}  height="50" alt="" />
        </Navbar.Brand>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#" style={{fontSize:"20px"}}>Commerce</a>
          </Navbar.Text>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Welcome: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default TopBar