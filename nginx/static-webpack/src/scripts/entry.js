import 'normalize.css'

import React from 'react'
window.React = React

import {ReactDOM, render} from 'react-dom'
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom'

import App from './App'


render(<App />,
  document.getElementById('react-container')
)

