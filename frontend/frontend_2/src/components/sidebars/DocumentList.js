import {FixedSizeList as List} from "react-window";
import Button from "react-bootstrap/Button";
import { API_URL, REACT_URL } from './../../config'
import {useEffect, useRef} from "react";
import "./DocumentList.css"




function DocumentList(props){
    //initialize variables to save value of from within useEffect using useRef hook
    let docsToLoad = useRef();
    let numDocs = useRef();

    useEffect( () => {
        //function to get documents (inside useEffects as the asynchronous function)
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
                docsToLoad.current = docs;
                numDocs.current =  docs.length;
            } catch (error) {
                console.error(error);
            }
        }
        fetchDocuments();

        console.log(docsToLoad)
    }, []);

  const docs = [
        {URL: "www.wqdwqojdfnqwd.com", Title: "German HW"},
        {URL: "www.wqdwqojdfqdwwqdwdwd.com", Title: "German HW 2"},
        {URL: "www.dqwdikcdw.com", Title: "German HW 3"}
    ];


  //addDocument should be the responsibility of the upload page that Songyaun is coding, refactor this code into
  // const addDocument = e => {
  //
  //
  //   let docListAddDocAPIstring = API_URL + "/api/docs/add/"
  //   return fetch(docListAddDocAPIstring, {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': "Token " + sessionStorage.getItem('token')
  //       },
  //       //body: JSON.stringify(document)
  //   })
  //       .then(data => data.json())
  // }

  return(

    <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Document List</h1>
        <Button variant="success" >Add Document</Button>
        <div className="mb-4">
        </div>
            <List
                height={150}
                itemCount={numDocs.current}
                itemSize={35}
                width={300}
            >
                {Row}
            </List>
      </main>

  );

}

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

// function renderDocumentItem(document, idx){
//   return (
//       <li key={idx}>
//           <div className="documentListCard">
//             <span>
//                 <b>file: {document.Title}</b>
//             </span>
//             <span>
//                 <button className="btn btn-danger"> Delete </button>
//             </span>
//
//           </div>
//       </li>
//   );
// }

export default DocumentList