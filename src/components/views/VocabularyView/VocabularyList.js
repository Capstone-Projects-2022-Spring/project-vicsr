import {useEffect} from "react";
import Card from "react-bootstrap/Card"
import {FixedSizeList as List} from "react-window";
import {Spinner} from "react-bootstrap";


function VocabularyList(props) {

    console.log(props.words);

    useEffect( () => {
        console.log(props.toString())
    }, []);

    const Row = ({index, style}) => (
        <div style={style}>
            <Card>
                <Card.Title>
                    <p>
                        Word: {props.words[0]}
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
                    itemCount={3}
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