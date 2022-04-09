import {FixedSizeList as List} from "react-window";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import {useEffect} from "react";
import "./FlashcardList.css"
import {Spinner} from "react-bootstrap";
import FlashcardOptions from "./FlashcardOptions";
import {Link} from "react-router-dom";
import PopUp from "../../../sidebars/DocumentList/PopUp";


function FlashcardList(props){
    //on click, return the top level document id and the .files nested list to the DocumentView
    /*
    function clickDeckChooseButtonHandler(){
        //console.log(urls)
        props.chooseDeck();
    }
    useEffect( () => {
        }, []);

    const Row = ({index, style}) => (
        <div style ={style} className="flashcardListRowWrapper">
            <Card>
                <Card.Title>
                    Title: {index}
                </Card.Title>
                <Card.Body>
                    <div>ID: {index}</div>
                    <Button onClick={() => clickDeckChooseButtonHandler()}>Choose this deck!</Button>
                </Card.Body>
            </Card>
        </div>
    );

  return(

    <main className="container">
        <div/>
        {props.isLoading && <Spinner animation="border"/>}
        <List
            height={900}
            itemCount={20}
            itemSize={150}
            width={300}
        >
            {Row}
        </List>
      </main>
  );*/

 //Testing Area
    //on click, return the top level document id and the .files nested list to the DocumentView
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
                    Title: {props.documents[index].filename}

                    <div className="button_right">
                        <FlashcardOptions deskid={props.documents[index].id}/>
                    </div>
                </Card.Title>

                <Card.Body>
                    <div>ID: {props.documents[index].id}</div>
                    <Button variant="warning" onClick={() => clickDeckChooseButtonHandler(props.documents[index].id, props.documents[index].files)}>Choose this deck!</Button>
                </Card.Body>
            </Card>
        </div>
    );

  return(

    <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">FlashCard List</h1>

        {/* <PopUp/> |Maybe add it as Add Desks?|*/}

        <div/>
        {props.isLoading && <Spinner animation="border"/>}
        <List
            height={600}
            itemCount={props.numberOfDocs}
            itemSize={150}
            width={300}
        >
            {Row}
        </List>

      </main>
  );

}

export default FlashcardList
