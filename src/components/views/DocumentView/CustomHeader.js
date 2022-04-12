import {REACT_URL} from "../../../config";
import {Button} from "react-bootstrap";
import React from "react";

export default function CustomHeader(){


    const handleLogout = e => {
        e.preventDefault();
        let docViewHandleSubmitString = REACT_URL + "/logout"
        window.location.replace(docViewHandleSubmitString);
    }

    return(
        <div className="row" style={{
            background: "#4f734a",
            color: "white",
            border:"slategray",
            borderWidth: 2
        }}>
            <div className="col-11 justify-content-start">
                <h1>Welcome to VICSR</h1>
            </div>
            <div className="col-1 justify-content-end">
                <Button
                    variant="secondary"
                    className="col rounded-bottom"
                    style={{
                        marginLeft: "2px",
                        justifyContent: "left"

                    }}
                    onClick={(e) => handleLogout(e)}
                >Logout</Button>
            </div>
        </div>
    )
}