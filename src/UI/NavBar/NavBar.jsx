import React from 'react';
import {Container, Figure, Nav, Navbar, Offcanvas} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand>Gallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Navigate</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link className='nav-link' to='/'>Gallery</Link>
                                <Link className='nav-link' to='/about'>About</Link>
                                <Link className='nav-link' to='/compare'>Compare</Link>
                            </Nav>
                            <hr/>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src="https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png"
                                />
                                <Figure.Caption style={{textAlign:'center'}}>
                                    My avatar and my name.
                                </Figure.Caption>
                            </Figure>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </nav>
    );
};

export default NavBar;
