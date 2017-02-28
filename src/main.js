import React from 'react'
import ReactDOM from 'react-dom'
import App from './jsx/App.jsx'
import app from './jsx/_state'

//import Axial from 'react-axial'
//Axial.addDefaultLogListeners();
//Axial.Component.addDefaultLogListeners();
//Axial.Component.debug = true;

ReactDOM.render(<App />, document.getElementById('main'));
window.app = app;