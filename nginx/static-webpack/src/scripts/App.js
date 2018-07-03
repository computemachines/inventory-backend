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
import Tab from './components/Tab'
import Form from './components/Form'
import NewItem from './components/NewItem'

import { Route, withRouter } from 'react-router-dom'

const App = () =>
      {
	return (
	  <React.Fragment>
	    <div className='app-bar'>
	      <h1 className='app-bar-title'>Inventory App</h1>
	    </div>
	    <TabBar>
	      <Tab to="/">Search</Tab>
	      <Tab to="/new">New</Tab>
	      <Tab to="/move">Move</Tab>
	      <Tab to="/audit">Audit</Tab>
	    </TabBar>
	    <Route path="/new" component={NewItem}/>
	    <Form />
	  </React.Fragment>
	)
      }

export default hot(module)(App)
