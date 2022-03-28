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
        <div className="documentListRowWrapper my-1">
            <Card className="documentListCard">
                <Card.Body>
                    <Card.Title className="documentListCardTitle">
                        {props.documents[index].filename}
                    </Card.Title>
                    <Card.Text>
                        URL: {props.documents[index].file}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

  return(

    <main className="container">
        <div className="row">
            <div className="col-12" style={{marginTop: "30px"}}>
                <p className="text-white text-uppercase text-center" style={{fontSize: "25px"}}>
                    Documents
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 text-center my-2">
                <Button variant="success" >Add Document</Button>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                {props.isLoading && <Spinner animation="border"/>}
                <List
                    height={500}
                    itemCount={props.numberOfDocs}
                    itemSize={35}
                >
                    {Row}
                </List>
            </div>
        </div>

    </main>
  );
}

export default DocumentList