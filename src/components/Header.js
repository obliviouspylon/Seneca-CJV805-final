import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown, Image, Button, Form } from 'react-bootstrap';
import Cookies from 'universal-cookie';

const Header = () => {
    // https://stackoverflow.com/questions/56729279/redirect-to-another-component-after-submit-in-react
    const [Search, setSearch] = useState("");
    const searchChange = (e) => setSearch(e.target.value);
    const cookies = new Cookies(req.headers.cookie);
    let navigate = useNavigate();
    function onClick() {
        if (Search.length > 0) {
            navigate(`/search?title=${Search}`);
        } else {
            console.log("CLICK")
        }
    };

    function onLogOut() {
        cookies.remove("email");
        cookies.remove("firstName");
        cookies.remove("lastName");
        navigate(`/login`);
    };



    return (

        <header>
            <Navbar variant='dark' sticky='top' expand="md" collapseOnSelect sticky-top="true">
                <Navbar.Brand>
                    <div className='logo'>
                        <Image src="\logo.png" rounded fluid={true} />
                    </div></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='nav-link'>
                        <Nav.Link><Link className='nav-link' to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link className='nav-link' to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link className='nav-link' to="/listings">Listings</Link></Nav.Link>
                        <Nav.Link><Link className='nav-link' to="/property">Property Types</Link></Nav.Link>
                    </Nav>

                    <Nav className='ms-auto'>
                        <NavDropdown title="Search">
                            <Form.Control type="text" placeholder="Search" value={Search} onChange={searchChange} />
                            <Button className='submitButton' variant="primary" onClick={onClick}>Search</Button>
                        </NavDropdown>
                        <NavDropdown title="Account">
                            <NavDropdown.Item><Link className='nav-sublink' to="/registration">Registration</Link></NavDropdown.Item>
                            {
                                (cookies.get('email') === undefined) ?
                                    <NavDropdown.Item onClick={onLogOut}>Log Out</NavDropdown.Item> :
                                    <NavDropdown.Item><Link className='nav-sublink' to="/login">Login</Link></NavDropdown.Item>
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </header>)
};

export default Header;
