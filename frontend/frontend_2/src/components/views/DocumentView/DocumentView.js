import React from 'react'
import {Link} from "react-router-dom";
import {REACT_URL } from './../../../config'
import DocumentListLoader from "../../sidebars/DocumentList/DocumentListLoader.js";


export default function DocumentView() {

    const handleSubmit = e => {
        e.preventDefault();
        let docViewHandleSubmitString = REACT_URL + "/logout"
        window.location.replace(docViewHandleSubmitString);
    }

    return(
    <div className="container-fluid h-100 bg-white border-danger border-5 border">
        <div className="row bg-dark">
            <div className="col-md bg-primary border-bottom">
                <p>VICSR Dasboard</p>
            </div>
        </div>


        <header className="row2">
            <div className="documentList" >
                <DocumentListLoader/>
            </div>
            <div className="canvas col-md bg-primary h-100">
                <iframe title="test-pdf" src= "https://www.germansociety.org/wp-content/uploads/2022/01/ApplicationForm2022.pdf"/>
            </div>
            <div className="col-md bg-dark h-100">
                <form onSubmit={handleSubmit}>
                    <button type="submit"> Logout </button>
                </form>

            </div>
        </header>
        <div className="row bg-dark border-top">
            <Link to='/flashcards'>Go to flashcard view</Link>
        </div>

    </div>
    );
}