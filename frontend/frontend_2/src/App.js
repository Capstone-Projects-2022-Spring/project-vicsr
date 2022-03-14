import React from "react"
import './App.css';
import DocumentList from './components/DocumentList.js'
import Login from './components/views/auth/Login.js'
import Register from './components/views/auth/Register.js'
import Logout from './components/views/auth/Logout.js'
import Modal from 'react-modal'

//setup for LoginModal
// necessary to include according to: https://reactcommunity.org/react-modal/accessibility/
Modal.setAppElement('#root');

//variables and setup for authentication / login
function setToken(userToken){
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken(){

}

//variables and setup for Modal
const customLoginModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function App() {
    //Variables for the Modal elements
    let subtitle;
    const [loginModalIsOpen, setIsOpen] = React.useState(false);

    function openLoginModal() {
        setIsOpen(true);
    }

    function afterOpenLoginModal() {
        // references are now sync'd and can be accessed.
    }

    function closeLoginModal() {
        setIsOpen(false);
    }

    //Variables for the document list component
    const fake_documents = [
        {URL: "www.wqdwqojdfnqwd.com", Title: "German HW"},
        {URL: "www.wqdwqojdfqdwwqdwdwd.com", Title: "German HW 2"},
        {URL: "www.dqwdikcdw.com", Title: "German HW 3"}
    ]

    //token for authentication
    const token = getToken()

    //below here we can check if there is a token or not, and render components conditionally based on that

    return (
        <div id = "root" className="App">
        <Modal
            isOpen={loginModalIsOpen}
            onAfterOpen={afterOpenLoginModal}
            onRequestClose={closeLoginModal}
            style={customLoginModalStyles}
            contentLabel="Login Modal"
        >
            <div className="loginModalContent">
                <div className="loginSide">
                    <Login setToken={setToken}/>
                </div>
                <div className="registerSide">
                    <Register/>
                </div>
            </div>
            <button className="closeModalBtn" onClick={closeLoginModal}>close</button>
        </Modal>
            <div className="row1">
                <h1>Welcome to VICSR</h1>
                <button onClick={openLoginModal}>Login or Register</button>
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
