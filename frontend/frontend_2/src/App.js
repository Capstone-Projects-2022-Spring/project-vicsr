import './App.css';
import DocumentList from './components/DocumentList.js'

function App() {
  const fake_documents = [
    {URL: "www.wqdwqojdfnqwd.com", Title: "German HW"},
    {URL: "www.wqdwqojdfqdwwqdwdwd.com", Title: "German HW 2"},
    {URL: "www.dqwdikcdw.com", Title: "German HW 3"}
  ]
  return (
    <div className="App">
      <div className="row1">
        <h>Welcome to VICSR</h>
      </div>
      <header className="row2">
        <div className="documentList">
          <DocumentList documents = {fake_documents} />
        </div>
        <div className="canvas">
          <iframe title="test-pdf" src= "https://www.germansociety.org/wp-content/uploads/2022/01/ApplicationForm2022.pdf"/>
        </div>
      </header>
    </div>
  );
}

export default App;
