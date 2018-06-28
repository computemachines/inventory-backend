import "../fonts/index.css"

import React from 'react';
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types';

// import {
//   mdcButton,
//   mdcButtonRaised
// } from "@material/button/mdc-button.scss"

import "@material/button/mdc-button.scss"

import {
  app as appStyle, appBar, appBarTitle,
  content, appButton
} from  "../styles/App.scss"

import TabBar from './components/TabBar'

class App extends React.Component {
  render() {
    
    return (
      <div className={appStyle}>
	<div className={appBar}>
	  <h1 className={appBarTitle}>Inventory App</h1>
	</div>
	<TabBar />
	<div className={content}>
	  <button className={`${appButton} mdc-button`}>Button</button>
	</div>
      </div>
    )
  }
}

export default hot(module)(App)
