import './FlashCardView.css'
import FlashCard from "./subcomponents/FlashCard.js"
import {Link} from "react-router-dom";
import React from "react";
import FlashcardListLoader from "./subcomponents/FlashcardListLoader";

export default function FlashCardView(){


    return(
        <div className= "container">
            <div>
                <h1>This is the flashcard page</h1>
                <Link to='/docs'>Go to document view</Link>
            </div>
            <div className="row">
                <div className="col">
                    <FlashcardListLoader/>
                </div>
                <div className="col">
                    <FlashCard/>
                </div>
                <form>
                    <button>Press this</button>
                </form>
            </div>
        </div>
    )
}