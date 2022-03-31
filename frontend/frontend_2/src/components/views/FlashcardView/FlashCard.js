import {useState} from "react";

export default function FlashCardView(){
    const [flip, setFlip] = useState(false)

    let back_content = "BACK CON"
    return(
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">FRONT CONTENT HERE</div>
            <div className="back">{back_content}</div>
        </div>
    )
}