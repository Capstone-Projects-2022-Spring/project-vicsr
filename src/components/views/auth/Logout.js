import React, { useState, useEffect, Fragment } from 'react';
import { API_URL, REACT_URL } from '../../../config'

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('token') == null) {
      let logoutUseEffectString = REACT_URL + "/login"
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
        let logoutHandleLogoutString = REACT_URL + "/login"
        window.location.replace(logoutHandleLogoutString);
      });
  };

  return (
    <div>
      {loading === false && (
        <Fragment>
          <h1>Are you sure you want to logout?</h1>
          <input type='button' value='Logout' onClick={handleLogout} />
        </Fragment>
      )}
    </div>
  );
};

export default Logout;