import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import './auth.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_URL, REACT_URL } from '../../../config'


async function registerUser(credentials) {
    //login logic/talking to server goes here
    let registerUserAPIstring = API_URL + '/api/users/auth/register/'
    return fetch(registerUserAPIstring, {
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
        let reigsterUseEffectString = REACT_URL + "/docs"
        window.location.replace(reigsterUseEffectString);
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
            let registerOnSubmitString = REACT_URL+ '/docs/'
            window.location.replace(registerOnSubmitString);
        } else {
            setEmail('');
            setPassword1('');
            setPassword2('');
            setErrors(true);
        }
    }

  return (
    <div className="register-wrapper">
      {loading === false && <form className="form-container" onSubmit={handleSubmit} style={{minWidth: "30vw"}}>
            <div id="registerTitle" className="form-group form-label py-3">
                Register with VICSR
            </div>
            {errors === true && <h2>Cannot register with provided credentials</h2>}
            <div className="form-group py-4">
                <input className="form-control-lg w-100"
                       type="email"
                       name='email'
                       placeholder='Email'
                       value={email}
                       onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group py-4">
                <input className="form-control-lg w-100"
                       type="password"
                       name='password1'
                       placeholder="Password"
                       value={password1}
                       onChange={e => setPassword1(e.target.value)} />
            </div>
            <div className="form-group py-4">
                <input className="form-control-lg w-100"
                       type="password"
                       name='password2'
                       placeholder="Confirm Password"
                       value={password2}
                       onChange={e => setPassword2(e.target.value)} />
            </div>
            <div className="form-group py-4">
                <button className="btn btn-lg btn-success w-100" type="submit" onSubmit={registerUser} >Register</button>
            </div>
      </form>}
    </div>
  );
};

Register.propTypes = {
  setToken: PropTypes.func.isRequired
};
