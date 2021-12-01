import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function WeatherNavBar(props) {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#/">Weather App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#/Favorite">Favorite</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default WeatherNavBar;