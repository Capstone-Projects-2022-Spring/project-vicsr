import {FixedSizeList as List} from "react-window";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import {useEffect} from "react";
import "./DocumentList.css"
import {Spinner} from "react-bootstrap";
import OptionButton from "./OptionButton";
import {Link} from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination'



function DocumentList(props){
    useEffect( () => {
        }, []);

    const Row = ({index}) => (
        <div className="documentListRowWrapper">
            <Card>
                <Card.Title>
                    Title: {props.documents[index].filename}

                    <div className="button_right">
                        <OptionButton/>
                    </div>

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
      
        <Link to='/flashcards'>
            <Button variant="warning" >Flashcard</Button>
        </Link>
      
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

        {/*
        //Pagination
        <Pagination size={'sm'}>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Next />
        </Pagination>
        */}

      </main>
  );
}

export default DocumentList
