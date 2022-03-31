import './FlashCardView.css'
import FlashCard from "./FlashCard.js"
import {Link} from "react-router-dom";
import React from "react";

export default function FlashCardView(){


    return(
        <div>
            <div>
                <h1>This is the flashcard page</h1>
                <Link to='/docs'>Go to document view</Link>
            </div>
            <FlashCard/>
            <form>
                <button>Press this</button>
            </form>
        </div>
    )
}