import React, { useState, useEffect, Fragment } from 'react';
import { API_URL, REACT_URL } from '../../../config'
import Register from "./Register";

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('token') == null) {
      let logoutUseEffectString = REACT_URL + "/"
      window.location.replace(logoutUseEffectString);
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = e => {
    e.preventDefault();

    let logoutHandleLogoutString = API_URL + "/api/users/auth/logout/"
    fetch(logoutHandleLogoutString, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${sessionStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        sessionStorage.clear();
      
        let logoutHandleLogoutString = REACT_URL + "/"

        window.location.replace(logoutHandleLogoutString);
      });
  };

  const handleGoBack = e => {
      e.preventDefault();
      window.location.replace("/docs");
  }

  return (
      <div className="container-fluid auth-bg">
          <div className="row justify-content-center">
              <div className="col-12 col-sm-6 col-md-4">
                  <form className="form-container" style={{minHeight: "30vh"}} onSubmit={handleLogout}>
                      <div className="form-group py-4">
                          <span className="centerChildrenHorizontal py-3">Are you sure you want to logout?</span>
                          <button className="btn btn-lg btn-primary btn-block w-100" type="submit">Logout</button>
                      </div>
                      <div className="form-group py-4">
                          <button
                              className="btn btn-lg btn-outline-success btn-block w-100"
                              onClick={handleGoBack}
                          >Go Back</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  );
};

export default Logout;