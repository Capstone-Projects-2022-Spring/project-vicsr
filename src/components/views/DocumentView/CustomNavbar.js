import React, {useEffect} from "react";
import CanvasDraw from "react-canvas-draw";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {REACT_URL} from "../../../config";
import Button from "react-bootstrap/Button";

export default function CustomNavbar(props){

   const handleLogout = e => {
        e.preventDefault();
        let docViewHandleSubmitString = REACT_URL + "/logout"
        window.location.replace(docViewHandleSubmitString);
    }

    return(
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Nav className="nav-fill w-100">
                    <Nav.Link className="border" as={Link} to="/docs">Documents</Nav.Link>
                    <Nav.Link className="border" as={Link} to="/flashcards">Flashcards</Nav.Link>
                </Nav>
                </Container>
                <Button variant="secondary" className="rounded-bottom" onClick={(e) => handleLogout(e)}>Logout</Button>

            </Navbar>
        </div>
    )
}