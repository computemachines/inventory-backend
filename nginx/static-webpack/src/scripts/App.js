import "../fonts/index.css"

import React from 'react';
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types';

// import {
//   mdcButton,
//   mdcButtonRaised
// } from "@material/button/mdc-button.scss"

import '../styles/App.scss'

import TabBar from './components/TabBar'
import Form from './components/Form'

class App extends React.Component {
  render() {
    
    return (
      <div className=''>
	<div className='app-bar'>
	  <h1 className='app-bar-title'>Inventory App</h1>
	</div>
	<TabBar />
	<div className='content'>
	  <Form />
	</div>
      </div>
    )
  }
}

export default hot(module)(App)
