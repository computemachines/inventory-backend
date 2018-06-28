import React from 'react'
import {Component} from 'react'
import {Toolbar, ToolbarGroup, ToolbarTitle} from '@material-ui/core/Toolbar'
// import AutoComplete from 'material-ui/AutoComplete';
import {cyan500, white} from '@material-ui/core/colors';
import {BrowserRouter as Router, Link} from 'react-router-dom'

import SearchIcon from 'react-icons/lib/md/search';


import '../../styles/AppBar.css'

export class AppBar extends Component {
  render() {
    return (
      <div className="appBar group">
        <Link to="/"><h1>Inventory App</h1></Link>
        <nav className="group">
          <Link to="/new">New</Link>
          <Link to="/move">Move Item</Link>
        </nav>
      </div>
    )
  }
}
