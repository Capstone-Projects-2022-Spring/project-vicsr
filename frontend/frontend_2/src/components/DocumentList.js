import FlatList from "flatlist-react"

import "./DocumentList.css"


function DocumentList(props){
  const docs = props.documents;

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
        console.log(documents)
      });
  }

  return(

//      <ul className="no-bullets">
//          <FlatList
//            list={docs}
//            renderItem={renderDocumentItem}
//            renderWhenEmpty={() => <div>List is empty!</div>}
//          />
//      </ul>

    <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Document List</h1>
        <div className="row">
          <div className="col-sm-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button className="btn btn-primary" onClick={getDocuments}> Add Document </button>
              </div>
              <ul className="no-bullets">

                <FlatList
                    list={documents}
                    renderItem={renderDocumentItem}
                    renderWhenEmpty={() => <div>List is empty!</div>}
                />

              </ul>
            </div>
          </div>
        </div>
      </main>

  );

}

function renderDocumentItem(document, idx){
  return (
      <li key={idx}>
          <div className="documentListCard">
            <span>
                <b>file: {document.filename}</b>
            </span>
            <span>
                <button className="btn btn-danger"> Delete </button>
            </span>

          </div>
      </li>
  );
}

export default DocumentList