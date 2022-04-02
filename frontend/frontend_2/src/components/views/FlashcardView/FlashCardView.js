import './FlashCardView.css'
import FlashCard from "./subcomponents/FlashCard.js"
import {Link} from "react-router-dom";
import React from "react";
import FlashcardListLoader from "./subcomponents/FlashcardListLoader";
import CustomNavbar from "../DocumentView/CustomNavbar";

export default function FlashCardView(){


    return(
        <div className= "container-fluid w-100 h-100 bg-white">
            <div className="row">
                <div className="col">
                    <FlashcardListLoader/>
                </div>
                <div className="col">
                    <FlashCard/>
                </div>
            </div>
            <CustomNavbar/>
        </div>
    )
}