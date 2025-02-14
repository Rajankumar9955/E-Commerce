import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const TopBar=()=>{
    return(
        <>
       <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Welcome</Navbar.Brand>
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