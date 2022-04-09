import {FixedSizeList as List} from "react-window";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import {useEffect} from "react";
import "./DocumentList.css"
import {Spinner} from "react-bootstrap";
import OptionButton from "./OptionButton";
import {Link} from "react-router-dom";
import PopUp from "./PopUp";


function DocumentList(props){
    //on click, return the top level document id and the .files nested list to the DocumentView
    function clickDocChooseButtonHandler(topLevelID, urls){
        //console.log(urls)
        props.chooseDocument(topLevelID, urls);
    }
    useEffect( () => {
        }, []);

    const Row = ({index, style}) => (
        <div style ={style} className="documentListRowWrapper">
            <Card
                id="documentListCard"
                onClick={() => clickDocChooseButtonHandler(props.documents[index].id, props.documents[index].files)}
            >
                <Card.Title>
                    <div id="documentCardTitle">
                        {props.documents[index].filename}
                    </div>

                    <div className="button_right">
                        <OptionButton documentid={props.documents[index].id}/>
                    </div>

                </Card.Title>
                <Card.Body>
                    <div>ID: {props.documents[index].id}</div>
                    <Button>Choose this document!</Button>
                </Card.Body>
            </Card>
        </div>
    );

  return(

    <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Document List</h1>

        <PopUp/>
      
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

export default DocumentList
