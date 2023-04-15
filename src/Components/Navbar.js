import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap/';

export default function Nav() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Soundboard</Navbar.Brand>
            </Container>
        </Navbar>
    );
}