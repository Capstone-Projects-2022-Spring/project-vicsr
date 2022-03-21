import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import './auth.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_URL, REACT_URL } from './../../../config'


async function registerUser(credentials) {
    //login logic/talking to server goes here

    return fetch('${API_URL}/api/users/auth/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
};

export default function Register( {setToken} ) {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('token') !== null) {
      window.location.replace("http://vicsr.herokuapp.com/docs/");
    } else {
      setLoading(false);
    }
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    const user = {
      email: email,
      password1: password1,
      password2: password2
    };

    // const token = await registerUser ( { email, password1, password2 });
    const token = await registerUser (user);
    console.log("token in register: " + token.key)
    setToken(token.key);

    if(token.key){
            window.location.replace("http://vicsr.herokuapp.com/docs/");
        } else {
            setEmail('');
            setPassword1('');
            setPassword2('');
            setErrors(true);
        }
    }

  return (
    <div className="register-wrapper">
      {loading === false && <h1>Register with VICSR</h1>}
      {errors === true && <h2>Cannot register with provided credentials</h2>}
      {loading === false && <form onSubmit={handleSubmit}>
            <label>
                <p>Email</p>
                <input type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} />
            </label> <br />
            <label>
                <p>Password</p>
                <input type="password" name='password1' value={password1} onChange={e => setPassword1(e.target.value)} />
            </label> <br />
            <label>
                <p>Confirm Password</p>
                <input type="password" name='password2' value={password2} onChange={e => setPassword2(e.target.value)} />
            </label> <br />
            <div>
                <br />
                <button type="submit" onSubmit={registerUser} >Register</button>
            </div>
      </form>}
    </div>
  );
};

Register.propTypes = {
  setToken: PropTypes.func.isRequired
};
