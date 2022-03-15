import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DocumentView from './components/DocumentView/DocumentView';
import useToken from './useToken';
import Login from './components/views/auth/Login';
import Register from './components/views/auth/Register';
import Logout from './components/views/auth/Logout'
import FlashcardView from './components/views/FlashCardView'

function App() {
    const { token, setToken } = useToken();
    console.log("token in app.js: " + token)

    if(!token) {
        return(
            <div className="wrapper">
                <Login setToken={setToken}/>
                    <Routes>
                        <Route path="/register" element={<Register setToken={setToken}/>}></Route>
                    </Routes>
            </div>
        );
    }
    return (
        <div className="wrapper">
            <h1>Welcome to VICSR!</h1>
                <Routes>
                    <Route path="/register" element={<Register setToken={setToken}/>}></Route>
                    <Route path="/login" element={<Login token/>}></Route>
                    <Route path="/logout" element={<Logout />}></Route>
                    <Route path="/docs" element={<DocumentView />}></Route>
                    <Route path="/flashcards" element={<FlashcardView />}></Route>
                </Routes>
        </div>
    );
}

export default App;