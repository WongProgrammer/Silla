import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import stklogo from '../stklogo.png';

class NavBar extends React.Component {
    constructor(props) {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <Navbar fixed="top" >
                    <Navbar.Brand href="#">
                        <img
                            src={stklogo}
                            width="120"
                            height="120"
                            className="d-inline-block align-top"
                            alt="STK logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#portfolio" style={{color: 'white', textDecoration: 'none'}} >Portfolio</Nav.Link>
                            <Nav.Link href="#about" style={{color: 'white', textDecoration: 'none'}} >About</Nav.Link>
                            <Nav.Link href="#contact" style={{color: 'white', textDecoration: 'none'}} >Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;