import FlatList from "flatlist-react"
import Button from "react-bootstrap/Button";
import { API_URL, REACT_URL } from './../../config'


//import "./DocumentList.css"


function DocumentList(props){
  const docs = [
        {URL: "www.wqdwqojdfnqwd.com", Title: "German HW"},
        {URL: "www.wqdwqojdfqdwwqdwdwd.com", Title: "German HW 2"},
        {URL: "www.dqwdikcdw.com", Title: "German HW 3"}
    ];

  const addDocument = e => {


    let docListAddDocAPIstring = API_URL + "/api/docs/add/"
    return fetch(docListAddDocAPIstring, {
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
  let docsToLoad;
  const getDocuments = e => {
    let docListGetDocsAPIstring = API_URL + "/api/docs/list/"
    return fetch(docListGetDocsAPIstring, {
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
        docsToLoad = documents;
        return documents;
      });
  }
  //let docsToLoad = await getDocuments();
  getDocuments();

  //console.log("docs to load: " + docsToLoad[0].filename);
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