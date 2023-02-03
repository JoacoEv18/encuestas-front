import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className='navBar'>
                    {/* <Navbar.Brand className='Nalink' href="/">Avivamiento SI</Navbar.Brand> */}
                    {/* <Navbar.Brand className='Nalink' href="/tabla">Ver Votos</Navbar.Brand> */}
                    <Nav className="me-auto">
                        
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}
