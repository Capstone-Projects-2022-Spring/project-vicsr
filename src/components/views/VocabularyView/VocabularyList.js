import {useEffect} from "react";
import Card from "react-bootstrap/Card"
import {FixedSizeList as List} from "react-window";
import {Spinner} from "react-bootstrap";


function VocabularyList(props) {

    useEffect( () => {
        console.log("Vocabulary List props: " + JSON.stringify(props, null, 4));
    }, []);

    const Row = ({index, style}) => (
        <div style={style}>
            <Card>
                <Card.Title>
                    <p>
                        Word: {props.words[index].word}
                    </p>
                </Card.Title>
                <Card.Body>
                    <p>
                        Card Body:
                    </p>
                </Card.Body>
            </Card>
        </div>
    );

    return (
        <div className="container">
            <div className="centerChildren">
                <h1 className="text-white text-uppercase text-center my-4">Vocabulary List</h1>
            </div>
            {props.isLoading && <Spinner animation="border"/>}
            <div className="centerChildren">
                <List
                    height={600}
                    itemCount={props.numWords}
                    itemSize={150}
                    width={200}
                >
                    {Row}
                </List>
            </div>
        </div>
    )
}

export default VocabularyList