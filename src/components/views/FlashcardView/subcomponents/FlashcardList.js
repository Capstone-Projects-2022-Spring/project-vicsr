import {FixedSizeList as List} from "react-window";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import {useEffect} from "react";
import "./FlashcardList.css"
import {Spinner} from "react-bootstrap";
import FlashcardOptions from "./FlashcardOptions";
import {Link} from "react-router-dom";
import PopUp from "../../../sidebars/DocumentList/PopUp";
import flashcardListLoader from "./FlashcardListLoader";


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
            <Card>
                <Card.Title>
                    Title: {props.studysets[index].filename}

                    <div className="button_right">
                        <FlashcardOptions studysetsid={props.studysets[index].id}/>
                    </div>
                </Card.Title>

                <Card.Body>
                    <div>ID: {props.studysets[index].id}</div>
                    <Button variant="warning" onClick={() => clickDeckChooseButtonHandler(props.studysets[index].id, props.studysets[index].files)}>Choose this deck!</Button>
                </Card.Body>
            </Card>
        </div>
    );


  return(

    <main className="container" style={{padding: "0", margin: "0 auto"}}>
        <h1 className="text-white text-uppercase text-center my-4">FlashCard List</h1>

        <div/>
        {props.isLoading && <Spinner animation="border"/>}
        <List
            height={600}
            itemCount={props.numberOfDesks}
            itemSize={150}
            width={300}
            style={{margin: "0 auto"}}
        >
            {Row}
        </List>

      </main>
  );

}

export default FlashcardList
