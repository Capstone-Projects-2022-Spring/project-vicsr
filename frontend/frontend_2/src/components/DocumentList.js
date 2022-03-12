import {FixedSizeList as List} from "react-window"

function DocumentList(props){
  const docs = props.documents;
  return(
    <List
      height={150}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  )

}

const Row = ({ index, style, title, URL }) => (
  <div style={style}>{title}</div>
);


export default DocumentList