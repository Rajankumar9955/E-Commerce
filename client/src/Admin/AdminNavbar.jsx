import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const AdminNavBar=()=>{
    return(
        <>
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">DashBoard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Welcome: <a href="#login">Raj Malhotra</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        </>
    )
}
export default AdminNavBar;