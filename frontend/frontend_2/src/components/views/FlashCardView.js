import './FlashCardView.css'

export default function FlashCardView(){
    return(
        <div>
            <div>
                <h1>This is the flashcard page</h1>
            </div>
            <div className="flashcard">
                <p>Content here</p>
            </div>
            <form>
                <button>Press this</button>
            </form>
        </div>
    )
}