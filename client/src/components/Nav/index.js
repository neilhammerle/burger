import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const index = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Nelson's Gourmet Burgers</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="/Menu">Menu</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default index
