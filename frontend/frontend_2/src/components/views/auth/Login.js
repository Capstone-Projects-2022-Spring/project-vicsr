import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types"

const Login = ({setToken}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('http://localhost:3000/dashboard');
        } else {
            setLoading(false);
        }
    }, []);

    //function to send credentials and take behavior from the server
    //from https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications for now
    async function loginUser(credentials) {
        return fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }

    //function which triggers when login button is clicked
    const onSubmit = async e => {
        //what does this do?
        e.preventDefault();


        const token = await loginUser({email, password});
        setToken(token);

        //login logic/talking to server goes here


    };

    return (
        <div>
            {loading === false && <h1>Login</h1>}
            {errors === true && <h2>Cannot log in with provided credentials</h2>}
            {loading === false && (
                 <form onSubmit={onSubmit}>
                    <label htmlFor='email'>Email address:</label> <br />
                    <input
                         name='email'
                         type='email'
                         value={email}
                         required
                         onChange={e => setEmail(e.target.value)}
                    />{' '}
                    <br />
                    <label htmlFor='password'>Password:</label> <br />
                    <input
                        name='password'
                        type='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />{' '}
                    <br />
                    <input type='submit' value='Login' />
                </form>
            )}
        </div>
    );
};

export default Login;