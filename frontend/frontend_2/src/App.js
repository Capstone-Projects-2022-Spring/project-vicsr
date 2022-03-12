import React from "react"
import './App.css';
import DocumentList from './components/DocumentList.js'
import Modal from 'react-modal'

//setup for LoginModal
// necessary to include according to: https://reactcommunity.org/react-modal/accessibility/
Modal.setAppElement('#root');

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
        subtitle.style.color = '#f00';
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

                </div>
                <div className="registerSide">

                </div>
            </div>
            <button onClick={closeLoginModal}>close</button>
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
