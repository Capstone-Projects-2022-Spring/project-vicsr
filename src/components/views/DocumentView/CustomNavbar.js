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
        <div className="h-100">
            <Navbar className="h-100 w-100 py-0 text-center" bg="dark" variant="dark">
                <Container className=" h-100 m-0 p-0">
                    <Nav className="nav-fill w-100 h-100 py-0">
                        <Nav.Link className="btn btn-success btn-block border-dark w-100 h-75" as={Link} to="/docs">Documents</Nav.Link>
                        <Nav.Link className="btn btn-success btn-block border-dark w-100 h-75" as={Link} to="/flashcards">Flashcards</Nav.Link>
                    </Nav>
                </Container>
                {/*
                <Button variant="secondary" className="rounded-bottom" onClick={(e) => handleLogout(e)}>Logout</Button>
                */}
            </Navbar>
        </div>
    )
}