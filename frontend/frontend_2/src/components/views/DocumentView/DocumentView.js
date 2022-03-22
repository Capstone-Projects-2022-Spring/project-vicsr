import React, { Component } from 'react'
import DocumentList from '../../sidebars/DocumentList.js'
import DocumentModal from './DocumentModal'
import Logout from '../auth/Logout'
import {Link} from "react-router-dom";

//Variables for the document list component
const fake_documents = [
//    {URL: "www.wqdwqojdfnqwd.com", Title: "German HW"},
//    {URL: "www.wqdwqojdfqdwwqdwdwd.com", Title: "German HW 2"},
//    {URL: "www.dqwdikcdw.com", Title: "German HW 3"}
    {id:5, owner_id:3, filename:"file2", file:"https://vicsr-storage.s3.amazonaws.com/media/Screen_Shot_2022-02-22_at_9.25.23_AM_hsNF75k.png", date_added:"03/14/2022 06:55P", mode:"TRL", language:"English", trans_language:"German"},
    {id:6, owner_id:3, filename:"file3", file:"https://vicsr-storage.s3.amazonaws.com/media/Screen_Shot_2022-02-22_at_9.25.23_AM_MAqKJta.png", date_added:"03/14/2022 06:55P", mode:"TRL", language:"English", trans_language:"German"},
    {id:7, owner_id:3, filename:"file4", file:"https://vicsr-storage.s3.amazonaws.com/media/Screen_Shot_2022-02-22_at_9.25.23_AM_SSM1KM5.png", date_added:"03/14/2022 07:06P", mode:"TRL", language:"en", trans_language:"es"},
]


export default function DocumentView() {

    const handleSubmit = e => {
        e.preventDefault();
        window.location.replace("http://vicsr.herokuapp.com/logout");
    }

    return(
    <div className="container-fluid bg-white border-danger border-5 border">
        <div className="row bg-dark">
            <div className="col-md bg-primary border-bottom">
                <p>VICSR Dasboard</p>
            </div>
        </div>

        <div className="row bg-dark">
            <div className="documentList col-md" >
                <DocumentList documents = {fake_documents} />

            </div>
            <div className="canvas col-md bg-primary">
                <iframe title="test-pdf" src= "https://www.germansociety.org/wp-content/uploads/2022/01/ApplicationForm2022.pdf"/>
            </div>
            <div className="col-md bg-dark">
                <form onSubmit={handleSubmit}>
                    <button type="submit"> Logout </button>
                </form>

            </div>
        </div>
        <div className="row bg-dark border-top">
            <Link to='/flashcards'>Go to flashcard view</Link>
        </div>

    </div>
    );
}