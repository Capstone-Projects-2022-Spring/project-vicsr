import logo from './logo.svg';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <DocumentList documents = {fake_documents} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
