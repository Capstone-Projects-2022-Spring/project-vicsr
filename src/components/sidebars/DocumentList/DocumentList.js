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
    function clickDocChooseButtonHandler(topLevelID, urls, index){
        //console.log(urls)
        props.chooseDocument(topLevelID, urls);
        props.setIndex(index)
    }
    useEffect( () => {}, []);

    const Row = ({index, style}) => (
        <div style ={style} className="documentListRowWrapper">
            <Card id="documentListCard" className="greenBorder">
                <Card.Title className="px-0">
                    <div
                        id="documentCardTitle"
                        style={{
                            overflowWrap: "break-word",
                            inlineSize: "200px",
                    }}
                    >
                        {props.documents[index].filename}
                    </div>
                </Card.Title>
                <Card.Body style={{padding: "0px"}}>
                    <div className="d-block w-100">
                        <Button
                            variant="outline-primary"
                            onClick={() => clickDocChooseButtonHandler(
                                props.documents[index].id,
                                props.documents[index].files,
                                index)}
                            className="w-100"
                        >Select</Button>
                    </div>
                    <div className="d-block w-100">
                        <OptionButton
                            documentid={props.documents[index].id}
                            style={{width: "100%"}}
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );

  return(

    <main className="container">
        <div className="centerChildren">
            <h2 className="text-white text-uppercase text-center my-4">Document List</h2>
        </div>
        {/*<PopUp/>*/}

        {props.isLoading && <Spinner animation="border"/>}
        <div id="documentList" className="centerChildren">
            <List
                height={600}
                itemCount={props.numberOfDocs}
                itemSize={150}
                width={250}
            >
                {Row}
            </List>
        </div>
      </main>
  );
}

export default DocumentList
