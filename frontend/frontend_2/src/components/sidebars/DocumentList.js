import FlatList from "flatlist-react"
import Button from "react-bootstrap/Button";
import { API_URL, REACT_URL } from './../../config'
import {useEffect} from "react";


//import "./DocumentList.css"

async function fetchDocuments() {
    try {
        let docListGetDocsAPIstring = API_URL + "/api/docs/list/"
        const response = await fetch(docListGetDocsAPIstring, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token " + sessionStorage.getItem('token')
            },
        });
        const docs = await response.json();
        return docs;
    } catch (error) {
        console.error(error);
    }
}


function DocumentList(props){
    let docsToLoad = []
    useEffect(async () => {
        console.log("reload")
        docsToLoad = await fetchDocuments()
        console.log(docsToLoad)
    }, []);

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