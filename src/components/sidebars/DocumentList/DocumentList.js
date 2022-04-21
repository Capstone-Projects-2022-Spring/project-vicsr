import {FixedSizeList as List} from "react-window";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import {useEffect, useState} from "react";
import "./DocumentList.css"
import {Spinner} from "react-bootstrap";
import OptionButton from "./OptionButton";
import {Link} from "react-router-dom";
import PopUp from "./PopUp";


function DocumentList(props){


    let [numDocs, setNumDocs] = useState(0)

    //on click, return the top level document id and the .files nested list to the DocumentView
    function clickDocChooseButtonHandler(topLevelID, urls, index){
        //console.log(urls)
        props.chooseDocument(topLevelID, urls);
        props.setIndex(index)
    }

    function setDocUpdated(val){
         props.setDocUpdated(val)
         console.log("function running in doc list")
     }

     useEffect( () => {
         console.log("DocumentList.js being reloaded")
         setNumDocs(props.numberOfDocs)
     }, [props.documents, props.numberOfDocs]);

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
                            setDocUpdated = {setDocUpdated}
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
        <PopUp setDocUpdated = {setDocUpdated}/>
        {props.isLoading && <Spinner animation="border"/>}
        <div id="documentList" className="centerChildren">
            <List
                height={600}
                itemCount={numDocs}
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
