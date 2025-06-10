import { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="/" style={{ fontSize: '30px' }}>Pizza House</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="px-4" href="/">Home</Nav.Link>
                        <Nav.Link className="px-4" href="/">About Us</Nav.Link>
                        <Nav.Link className="px-4" href="/">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex" style={{ width: '400px' }} onSubmit={handleSubmit}>
                        <FormControl 
                            type="search" 
                            placeholder="Search" 
                            className="me-2"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button
                            variant="outline-light"
                            type="submit"
                            style={{
                                backgroundColor: '#C0073EFF',
                                border: 'none',
                                width: '50px',
                                aspectRatio: '1/1',
                                fontSize: '20px'
                            }}
                        >
                            <i className="bi bi-search"></i>
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;