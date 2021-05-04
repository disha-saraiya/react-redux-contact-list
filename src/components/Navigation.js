import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function Navigation(){
    return(
        <Navbar collapseOnSelect sticky="top" variant = "light" expand="lg">
        <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        </Navbar>
        )
}

export default Navigation; 