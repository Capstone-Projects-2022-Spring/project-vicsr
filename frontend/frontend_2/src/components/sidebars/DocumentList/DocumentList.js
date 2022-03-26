import {FixedSizeList as List} from "react-window";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import {useEffect} from "react";
import "./DocumentList.css"
import {Spinner} from "react-bootstrap";




function DocumentList(props){
    useEffect( () => {
        }, []);

    const Row = ({index}) => (
        <div className="documentListRowWrapper">
            <Card>
                <Card.Title>
                    Title: {props.documents[index].filename}
                </Card.Title>
                <Card.Body>
                    <div>URL: {props.documents[index].file}</div>
                </Card.Body>
            </Card>
        </div>
    );

  return(

    <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Document List</h1>
        <Button variant="success" >Add Document</Button>
        <div/>
        {props.isLoading && <Spinner animation="border"/>}
        <List
            height={900}
            itemCount={props.numberOfDocs}
            itemSize={35}
            width={300}
        >
            {Row}
        </List>
      </main>
  );
}

export default DocumentList