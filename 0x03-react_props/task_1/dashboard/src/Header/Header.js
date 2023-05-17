import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpg';

export default function () {
  return (
    <header className="App-header">
      <img src={logo} className="logo" alt="logo" />
      <h1>School dashboard</h1>
    </header>
  )
}
