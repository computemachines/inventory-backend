// import 'normalize.css'

import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
  obj.__proto__ = proto;
  return obj; 
}
import 'promise-polyfill/src/polyfill';
import 'es6-object-assign/auto';

import React from 'react'
window.React = React

import {render} from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import App from './App'
import '@material/button/mdc-button.scss'
import '@material/tabs/mdc-tabs.scss'

render(
  // <div>
  //   <nav className="mdc-tab-bar">
  //     <a className='mdc-tab' href="#">One</a>
  //     <a className='mdc-tab' href="#">Two</a>
  //     <span className='mdc-tab-bar__indicator'></span>
  //   </nav>
  // <button className="mdc-button">
  //   Button
  // </button>
  // </div>,
  <Router>
    <App />
  </Router>,
  document.getElementById('react-container')
)


