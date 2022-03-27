import React from 'react'
import {Link} from "react-router-dom";
import {REACT_URL } from './../../../config'
import {LinkContainer} from "react-router-bootstrap"
import DocumentListLoader from "../../sidebars/DocumentList/DocumentListLoader.js";

export default function DocumentView() {

    const handleSubmit = e => {
        e.preventDefault();
        let docViewHandleSubmitString = REACT_URL + "/logout"
        window.location.replace(docViewHandleSubmitString);
    }

    return(
    <div className="container-fluid h-100 padZero bgDark hideScrollBar">
        <div className="row">
            <div className="col-12 banner bgDark h-100">
                <p className="bannerTitle">VICSR Dasboard</p>
            </div>
        </div>


        <div className="row mainTrifoldContent">
            <div className="col-md-2 col-sm-12 bgDark2" >
                <DocumentListLoader/>
            </div>
            <div className="col-md col-sm-12 documentView bgSecondary padZero">
                <div className="h-100">
                    <iframe className="embeddedDocument" title="test-pdf" src= "https://www.germansociety.org/wp-content/uploads/2022/01/ApplicationForm2022.pdf"/>
                </div>
            </div>
            <div className="col-md-2 col-sm-12 bgSecondary">

            </div>
        </div>
        <div className="row modeSwitchFooter bgDark">
            <div className="col-6">
                <Link to='/flashcards'>Go to flashcard view</Link>
            </div>
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <button type="submit"> Logout </button>
                </form>
            </div>

        </div>

    </div>
    );
}