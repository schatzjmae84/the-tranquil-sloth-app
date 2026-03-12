import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import sleepySloth from '../../assets/sleepy-sloth.jpg';
import Image from 'react-bootstrap/Image';

const SlothHeader = () => {
    return (
        <Navbar sticky="top" className='justify-content-end'>
            <Navbar.Brand href="/">
                <Image
                    src={sleepySloth}
                    roundedCircle
                    width="30"
                    height="30"
                    className="d-inline-block align-top rounded-circle"
                    alt="Sloth Logo"
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
                The Tranquil Sloth
            </Navbar.Brand>
            <Nav variant='tabs' defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/mind">Mind</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/body">Body</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/heart">Heart</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/soul">Soul</Nav.Link>
                </Nav.Item>
            </Nav>            
        </Navbar>
    );
};

export default SlothHeader;