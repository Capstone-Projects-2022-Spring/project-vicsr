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

   const conatinerStyle = {
       textAlign: "center"
   }

   const navbarStyle = {
       width: "100%",
       height: "100%",
       margin: "0px",
       padding: "0px"
   }

   const navLinkStyle = {
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       fontSize: "2em",
   }

   return(
       <div className="h-100">
            <Navbar style={navbarStyle} bg="dark" variant="dark">
                <Nav className="nav-fill w-100 h-100 py-0">
                    <Nav.Link
                        className="btn btn-success btn-block border-dark w-100 h-75"
                        style={navLinkStyle}

                        as={Link}
                        to="/docs"
                    >
                        Documents
                    </Nav.Link>
                    <Nav.Link
                        className="btn btn-success btn-block border-dark w-100 h-75"
                        style={navLinkStyle}
                        as={Link}
                        to="/flashcards"
                    >
                        Flashcards
                    </Nav.Link>
                </Nav>
                {/*
                <Button variant="secondary" className="rounded-bottom" onClick={(e) => handleLogout(e)}>Logout</Button>
                */}
            </Navbar>
        </div>
   )
}