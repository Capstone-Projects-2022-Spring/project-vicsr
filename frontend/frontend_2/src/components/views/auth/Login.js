import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import './auth.css';
import { Link } from "react-router-dom";
import Register from './Register.js'
import { useNavigate } from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap"
import Button from "react-bootstrap/Button";
import { API_URL, REACT_URL } from './../../../config'


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
            window.location.replace('${REACT_URL}/docs/');
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
            window.location.replace('${REACT_URL}/docs/');
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
        <div className="login-wrapper">
            {loading === false && <h1>Login to VICSR</h1>}
            {errors === true && <h2>Cannot log in with provided credentials</h2>}
            {loading === false && (<form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="email" onChange={e => setEmail(e.target.value)} />
                </label> <br />
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <br />
                <div>
                    <br />
                    <button type="submit">Log In</button>
                </div>
            </form>)}
            <br />
            <nav>
                <li>
                    <LinkContainer to="/register">
                        <Button>Register</Button>
                    </LinkContainer>
                </li>
            </nav>
        </div>
    )

};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};