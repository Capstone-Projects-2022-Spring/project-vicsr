import {useEffect} from "react";
import CanvasDraw from "react-canvas-draw";
import {Container, Nav, Navbar} from "react-bootstrap";

export default function CustomNavbar(props){

    return(
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}