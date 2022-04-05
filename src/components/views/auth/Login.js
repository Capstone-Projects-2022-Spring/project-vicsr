import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import './auth.css';
import { Link } from "react-router-dom";
import Register from './Register.js'
import { useNavigate } from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap"
import Button from "react-bootstrap/Button";
import "./Login.css"
import { API_URL, REACT_URL } from '../../../config'

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

    return (
        <div className="container-fluid auth-bg">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3">
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div id="loginTitle" className="form-group form-label py-3">
                        VICSR
                        </div>
                        <div className="form-group py-4">
                            <input className="form-control-lg w-100"
                                   type="email"
                                   placeholder="Email"
                                   onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group py-4">
                            <input className="form-control-lg w-100"
                                   type="password"
                                   placeholder="Password"
                                   onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group py-4">
                            <button className="btn btn-lg btn-primary btn-block w-100" type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

    {/*
    return(
        <div className="container-fluid h-100">
            <div className="login-wrapper">
                {loading === false &&
                    <div className="row">
                        <div className="col-12 formItem">
                            <h1>Login to VICSR</h1>
                        </div>
                        <div className="col-12 formItem">
                            <img className="imageAutoSize" src="https://www.freepnglogos.com/uploads/elephant-png/elephant-designs-deviantart-24.png"/>
                        </div>
                    </div>
                }
                {errors === true && <h2>Cannot log in with provided credentials</h2>}
                {loading === false && (
                    <form onSubmit={handleSubmit} className="row">
                        <div className="col-12">
                            <label className="formItem">
                                <p>Email</p>
                                <input type="email" onChange={e => setEmail(e.target.value)} />
                            </label>
                        </div>
                        <div className="col-12">
                            <label className="formItem">
                                <p>Password</p>
                                <input type="password" onChange={e => setPassword(e.target.value)} />
                            </label>
                        </div>
                        <div className="col-12">
                            <div className="formItem">
                                <button type="submit">Log In</button>
                            </div>
                        </div>
                    </form>
                )}
                <nav className="row">
                    <div className="col-12">
                        <LinkContainer to="/register">
                            <Button>Register</Button>
                        </LinkContainer>
                    </div>
                </nav>
            </div>
        </div>
    )
    */}

};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};