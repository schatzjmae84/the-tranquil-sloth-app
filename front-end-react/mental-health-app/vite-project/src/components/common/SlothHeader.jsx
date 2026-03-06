import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import sleepySloth from '../../assets/sleepy-sloth.jpg';
import Image from 'react-bootstrap/Image';

const SlothHeader = () => {
    return (
        <Navbar expand="lg" className='bg-body-transparent'>
            <Container>
                <Navbar.Brand href="#home">
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
                <Nav className="justify-content-end" activeKey="/">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/mind">Mind</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/body">Body</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/heart">Heart</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/soul">Soul</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default SlothHeader;