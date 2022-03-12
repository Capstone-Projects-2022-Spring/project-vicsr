function DocumentList(props){
  const docs = props.documents;
  const listItems = URLs.map((URL) =>
    <li>{URL}</li>
  );
  return(
      <ul>{listItems}</ul>
  )

}

export default DocumentList