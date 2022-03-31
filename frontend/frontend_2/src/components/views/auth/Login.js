import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import './auth.css';
import { Link } from "react-router-dom";
import Register from './Register.js'
import { useNavigate } from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap"
import Button from "react-bootstrap/Button";
import "./Login.css"
import VICSRLogoImage from '../../../assets/VICSR-logo.png';
import atIcon from '../../../assets/at_symbol.png';
import { API_URL, REACT_URL } from './../../../config';

async function loginUser(credentials) {
    //login logic/talking to server goes here
    let loginString = API_URL + '/api/users/auth/login/'
    return fetch(loginString, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
};

export default function Login( {setToken} ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(sessionStorage.getItem('token') !== null) {
            let windowString = REACT_URL+ '/docs/'
            window.location.replace(windowString);
        } else {
            setLoading(false);
        }
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser( { email, password } );
        setToken(token.key);
        console.log("token in login.js: " + token.key)
        if(token.key){
            let onSubmitString = REACT_URL+ '/docs/'
            window.location.replace(onSubmitString);
        } else {
            setEmail('');
            setPassword('');
            setErrors(true);
        }
    }

    let navigate = useNavigate();
    const goToRegister = () => {
        alert('clicked');
        let path = 'register';
        navigate(path);
    }

    return(
        <div id="loginItemsContainer" className="container">
            {loading === false &&
                <div className="row py-5">
                    <div className="col-12 formItem">
                        <h1 id="appName">VICSR</h1>
                    </div>
                    <div className="col-12 px-5 formItem">
                        <img id="logoImg" className="" src={VICSRLogoImage}/>
                    </div>
                    {errors === true && <h2>Cannot log in with provided credentials</h2>}
                    <form onSubmit={handleSubmit}>
                        <div className="col-12 py-3">
                            <label className="formItem">
                                <input
                                    id="loginEmailInput"
                                    type="email"
                                    placeholder="Email"
                                    onChange={e => setEmail(e.target.value)} />
                            </label>
                        </div>
                        <div className="col-12 py-3">
                            <label className="formItem">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)} />
                            </label>
                        </div>
                        <div className="col-12">
                            <div className="formItem py-3">
                                <Button variant="success" type="submit">Log In</Button>
                            </div>
                        </div>
                    </form>
                    <div className="col-12">
                        <LinkContainer to="/register">
                            <div className="formItem py-0">
                                <Button variant="outline-info">Register</Button>
                            </div>
                        </LinkContainer>
                    </div>

                </div>
            }
            <nav className="row">
                <div className="col-12">

                </div>
            </nav>
        </div>
    )

};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};