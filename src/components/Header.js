import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown, Image } from 'react-bootstrap';

const Header = () => {

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
                            <input type={"text"} placeholder={"Search"}></input>
                        </NavDropdown>
                        <NavDropdown title="Account">
                            <NavDropdown.Item><Link className='nav-sublink' to="/registration">Registration</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className='nav-sublink' to="/login">Login</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </header>)
};

export default Header;
