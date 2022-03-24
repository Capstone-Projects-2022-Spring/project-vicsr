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
    <div>
        <h2>DocumentView</h2>

        <header className="row2">
            <div className="documentList" >
                <DocumentListLoader/>

            </div>
            <div className="canvas">
                <iframe title="test-pdf" src= "https://www.germansociety.org/wp-content/uploads/2022/01/ApplicationForm2022.pdf"/>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <button type="submit"> Logout </button>
                </form>

            </div>
        </header>

        <Link to='/flashcards'>Go to flashcard view</Link>
    </div>
    );
}