import {useEffect, useState} from "react";
import Card from "react-bootstrap/Card"
import {FixedSizeList as List} from "react-window";
import {Spinner} from "react-bootstrap";
import WordInfoModal from "./WordInfoModal";
import "./VocabularyList.css"

const vocabItemStyle = {
    color: "white",
    borderStyle: "solid",
    borderRadius: "2px",
    borderWidth: "3px",
    borderColor: "white",
    overflow: "hidden",
    marginBottom: "5px",
}


function VocabularyList(props) {

    let [currentWordData, setCurrentWordData] = useState({word: "", trans: "", def: ""})
    let [showWordModel, setShowWordModal] = useState(false);

    useEffect( () => {
        //console.log("Vocabulary List props: " + JSON.stringify(props, null, 4));
    }, []);

    function setCurrentWordDataByWordIndex(index) {
        const wordObj = props.words[index];

        setCurrentWordData({
            word: String(wordObj.word),
            trans: String(wordObj.translation),
            def: String(wordObj.definition)
        })
    }

    const Row = ({index, style}) => (
        <div
            id="vocabListItem"
            className="hideScrollBar centerChildrenVertical"
            onClick={() => {
                setCurrentWordDataByWordIndex(index);
                setShowWordModal(true);
                console.log("click");
            }}
            style={style}
        >
            <p id="vocabItemWord" className="my-0">
                "{props.words[index].word}"
            </p>
        </div>
    );

    return (
        <div className="container">
            <div className="centerChildren">
                <h2 className="text-white text-uppercase text-center my-4">Vocabulary List</h2>
            </div>
            <WordInfoModal show={showWordModel} setShow={setShowWordModal} wordData={currentWordData}/>
            {props.isLoading && <Spinner animation="border"/>}
            <div className="centerChildren">
                <List
                    height={600}
                    itemCount={props.numWords}
                    itemSize={40}
                    width={250}
                >
                    {Row}
                </List>
            </div>
        </div>
    )
}

export default VocabularyList