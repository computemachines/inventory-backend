import React from 'react'
import {ReactDOM, render} from 'react-dom'
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom'

import $ from 'jquery'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';

import {AppBar} from './components/AppBar'

import css from  'normalize.css'
import '../styles/Form.css'

window.React = React

const newBin = (props) => (
  <form>
  <label>
    <p className="input-prefix">BIN</p>
    <input type="text" name="binLabel" />
  </label>
    <RaisedButton
      className="button"
      style={{'display': 'block'}}
      label="Submit"
      primary={true}
      onClick={(e) => ($.ajax('http://0.0.0.0:5000/bins'))} />
  </form>
)

const newThing = (props) => (
  <p>{props.location.pathname}</p>
)

render(
  <Router>
    <MuiThemeProvider>
      <AppBar />
      <Route path="/new-bin" component={newBin} />
      <Route path="/new-thing" component={newThing} />
    </MuiThemeProvider>
  </Router>,
  document.getElementById('react-container')
)
