import FlatList from "flatlist-react"

import "./DocumentList.css"

function DocumentList(props){
  const docs = props.documents;
  return(
      <ul className="no-bullets">
          <FlatList
            list={docs}
            renderItem={renderDocumentItem}
            renderWhenEmpty={() => <div>List is empty!</div>}
          />
      </ul>
  )

}

function renderDocumentItem(document, idx){
  return (
      <li key={idx}>
          <div className="documentListCard">
              <b>{document.Title}</b>
          </div>
      </li>
  );
}

export default DocumentList