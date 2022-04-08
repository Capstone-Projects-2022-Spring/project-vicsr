import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DocumentView from './components/views/DocumentView/DocumentView';
import useToken from './useToken';
import Login from './components/views/auth/Login';
import Register from './components/views/auth/Register';
import Logout from './components/views/auth/Logout'
import FlashcardView from './components/views/FlashcardView/FlashCardView'
import FlashcardOptions from './components/views/FlashcardView/subcomponents/FlashcardOptions.js'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const { token, setToken } = useToken();
    console.log("token in app.js: " + token)

    if(!token) {
        return(
            <div className="wrapper">

                    <Routes>
                        <Route path="/" element ={<Login setToken={setToken}/>}/>
                        <Route path="/register" element={<Register setToken={setToken}/>}></Route>
                    </Routes>
            </div>
        );
    }
    console.log("got here in app.js")
    if (sessionStorage.getItem('token') === 'undefined'){
        sessionStorage.clear()
    }
    return (
        <div className="wrapper">
                <Routes>
                    <Route path="/register" element={<Register setToken={setToken}/>}></Route>
                    <Route path="/login" element={<Login token/>}></Route>
                    <Route path="/logout" element={<Logout />}></Route>
                    <Route path="/docs" element={<DocumentView />}></Route>
                    <Route path="/flashcards" element={<FlashcardView />}></Route>
                    <Route path="/flashcards/options" element={<FlashcardOptions />}></Route>
                </Routes>
        </div>
    );
}

export default App;