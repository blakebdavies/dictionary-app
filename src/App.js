import React from "react";
import logo from "./logo.png";
import './App.css';

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
      <Dictionary defaultKeyword= "wanderlust" />
      </main>
      </div>
      <footer className="App-footer">
        <small>This project was coded by Blake Davies, is <a href="https://github.com/blakebdavies/dictionary-app" target="_blank" rel="noreferrer">open-sourced</a> and hosted on <a href="https://eloquent-babbage-8e1acc.netlify.app" target="_blank" rel="noreferrer">Netlify</a></small></footer>
    </div>
  );
}
