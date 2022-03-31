import './FlashCardView.css'
import FlashCard from "./FlashCard.js"

export default function FlashCardView(){


    return(
        <div>
            <div>
                <h1>This is the flashcard page</h1>
            </div>
            <FlashCard/>
            <form>
                <button>Press this</button>
            </form>
        </div>
    )
}