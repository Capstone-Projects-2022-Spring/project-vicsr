import FlatList from "flatlist-react"
import Button from "react-bootstrap/Button";

//import "./DocumentList.css"


function DocumentList(props){
  const docs = [
        {URL: "www.wqdwqojdfnqwd.com", Title: "German HW"},
        {URL: "www.wqdwqojdfqdwwqdwdwd.com", Title: "German HW 2"},
        {URL: "www.dqwdikcdw.com", Title: "German HW 3"}
    ];

  const addDocument = e => {

    return fetch('https://vicsr-api-test.herokuapp.com/api/docs/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + sessionStorage.getItem('token')
        },
        //body: JSON.stringify(document)
    })
        .then(data => data.json())
  }

  let documents = []
  const getDocuments = e => {
    return fetch('https://vicsr-api-test.herokuapp.com/api/docs/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Token " + sessionStorage.getItem('token')
        },
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        documents = data;
        console.log(documents);
        return documents;
      });
  }
  let docsToLoad = getDocuments();
  return(

    <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Document List</h1>
        <Button variant="warning" onClick={addDocument}>Add Document</Button>
        <div className="mb-4">
        </div>
            <ul className="no-bullets">
                <FlatList
                    list={docs}
                    renderItem={renderDocumentItem}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                />
            </ul>
      </main>

  );

}

function renderDocumentItem(document, idx){
  return (
      <li key={idx}>
          <div className="documentListCard">
            <span>
                <b>file: {document.Title}</b>
            </span>
            <span>
                <button className="btn btn-danger"> Delete </button>
            </span>

          </div>
      </li>
  );
}

export default DocumentList