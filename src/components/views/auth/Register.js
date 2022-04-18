import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import './auth.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_URL, REACT_URL } from '../../../config'
import {Card} from "react-bootstrap";


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

export default function Register( {setRegisterClicked}, {setToken} ) {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    //had to check for literally the string "undefined", because sessionStorage.getitem returns a string if theres anything defined in its dict
    if ((sessionStorage.getItem('token') !== null) && sessionStorage.getItem('token') !== 'undefined') {
        console.log(sessionStorage.getItem('token'))
        console.log(typeof sessionStorage.getItem('token') != 'undefined')
        let registerUseEffectString = REACT_URL + "/docs"
        window.location.replace(registerUseEffectString);
    } else {
        setLoading(false);
    }
  }, [errorMessage]);

  async function handleSubmit (e) {
    e.preventDefault();

    const user = {
      email: email,
      password1: password1,
      password2: password2
    };

    // const token = await registerUser ( { email, password1, password2 });
    const token = await registerUser(user);
    console.log("token in register: " + token.key);
    console.log("registration response: " + JSON.stringify(token));
    console.log("error message: " + Object.values(token)[0]);
    console.log("key: " + token.key);

    //TODO: Need to use setToken in here in order to get login on registration

    if(token.key && token.key !== "undefined"){
        setErrorMessage("");
        console.log("register token noticed")
        let registerOnSubmitString = REACT_URL + '/docs/'
        window.location.replace(registerOnSubmitString);
    } else {
        console.log("Register error");
        console.log("Registration errors: " + Object.values(token))
        setEmail('');
        setPassword1('');
        setPassword2('');
        setErrorMessage(Object.values(token)[0]);
    }
  }

  return (
    <div className="register-wrapper">
      {loading === false && <form className="form-container" onSubmit={handleSubmit} style={{minWidth: "30vw"}}>
            <div id="registerTitle" className="form-group form-label py-3">
                Register with VICSR
            </div>
            {(errorMessage !== "")
                ?
                    <Card>
                        <Card.Body className="bg-danger text-white">
                            {errorMessage[0]}
                        </Card.Body>
                    </Card>
                : ""
            }
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
            <div className="form-group py-3" style={{textAlign: "center"}}>
                <div style={{paddingBottom: "10px"}}>Have an account?</div>
                <button className="btn btn-lg btn-outline-success w-100" onClick={() => {setRegisterClicked(false)}}>Return To Login</button>
            </div>
      </form>}
    </div>
  );
};

Register.propTypes = {
  setToken: PropTypes.func.isRequired
};
