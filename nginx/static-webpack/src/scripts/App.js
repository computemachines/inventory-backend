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
import NewItem from './components/NewItem'
import AuditItems from './components/AuditItems'
import ItemDetails from './components/ItemDetails'

import { Route, withRouter } from 'react-router-dom'

const Comment = () => null

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
	    <Route path="/audit" component={AuditItems}/>
	  </React.Fragment>
	)
      }

export default hot(module)(App)
