import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SlothHeader = () => {
    return (
        <Navbar expand="lg" className='nav-bar-body'>
            <Container>
                <Navbar.Brand href="#home">The Tranquil Sloth</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#mind">Mind</Nav.Link>
                    <Nav.Link href="#body">Body</Nav.Link>
                    <Nav.Link href="#heart">Heart</Nav.Link>
                    <Nav.Link href="#soul">Soul</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default SlothHeader;