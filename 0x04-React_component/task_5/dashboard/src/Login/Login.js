import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access to the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="text" id='email' name='email'/>
        <label htmlFor="password">Password:</label>
        <input type="password" id='password' name='password'/>
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}
