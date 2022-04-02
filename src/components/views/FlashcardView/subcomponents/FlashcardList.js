import {FixedSizeList as List} from "react-window";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import {useEffect} from "react";
import "./FlashcardList.css"
import {Spinner} from "react-bootstrap";



function FlashcardList(props){
    //on click, return the top level document id and the .files nested list to the DocumentView
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
  );
}

export default FlashcardList
