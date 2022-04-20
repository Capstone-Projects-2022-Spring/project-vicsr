import {FixedSizeList as List} from "react-window";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import {useEffect, useState} from "react";
import "./FlashcardList.css"
import {Spinner} from "react-bootstrap";
import FlashcardOptions from "./FlashcardOptions";
import {Link} from "react-router-dom";
import PopUp from "../../../sidebars/DocumentList/PopUp";
import flashcardListLoader from "./FlashcardListLoader";
import OptionButton from "../../../sidebars/DocumentList/OptionButton";



function FlashcardList(props){

    //on click, return the top level studysets id and the .files nested list to the FlashcardView
    function clickDeckChooseButtonHandler(topLevelID, urls){
        //console.log(urls)
        props.chooseStudySet(topLevelID, urls);
    }

    useEffect( () => {
        }, []);

    const Row = ({index, style}) => (
        <div style ={style} className="flashcardListRowWrapper">
            <Card className="greenBorder">
                <Card.Title id="flashcardSetTitle" className="px-0">
                    <div
                        id="flashcardSetTitle"
                        style={{
                            overflowWrap: "break-word",
                            inlineSize: "200px",
                        }}
                    >
                        {props.studysets[index].title}
                    </div>
                </Card.Title>
                <Card.Body className="p-0">
                    <div className="d-block w-100">
                        <Button
                            className="w-100"
                            variant="outline-info"
                            onClick={() => clickDeckChooseButtonHandler(
                                props.studysets[index].id,
                                props.studysets[index].files)}
                        >Select</Button>
                    </div>
                    <div className="d-block w-100">
                        <FlashcardOptions
                            studysetsid={props.studysets[index].id}
                            style={{width: "100%"}}
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );

    /*VIC add card to deck*/
    let [currentCardData, setCurrentCardData] = useState({word: "", trans: "", def: ""})
    let [showWordModel, setShowWordModal] = useState(false);

        function setCurrentCardDataByWordIndex(index) {
        const cardObj = props.words[index];

        setCurrentCardData({
            word: String(cardObj.word),
            trans: String(cardObj.translation),
            def: String(cardObj.definition)
        })
    }


  return(

    <main className="container" style={{padding: "0", margin: "0 auto"}}>
        <h1 className="text-white text-uppercase text-center my-4">FlashCard List</h1>

        <div/>
        {props.isLoading && <Spinner animation="border"/>}
        <div id="flashcardList" className="">
            <List
                height={600}
                itemCount={props.numberOfDesks}
                itemSize={135}
                width={300}
                style={{margin: "0 auto"}}
            >
                {Row}
            </List>
        </div>
      </main>
  );

}

export default FlashcardList
