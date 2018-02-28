import React from 'react'
import {Component} from 'react'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import AutoComplete from 'material-ui/AutoComplete';
import {cyan500, white} from 'material-ui/styles/colors';
import {BrowserRouter as Router, Link} from 'react-router-dom'

import SearchIcon from 'react-icons/lib/md/search';


import '../../styles/AppBarSearch.css'

export class AppBar extends Component {
  render() {
    return (
      <div className="appBar">
        <Link to="/"><h1>Inventory App</h1></Link>

        <ul>
          <li><Link to="/new-bin">New Bin</Link></li>
          <li><Link to="/new-thing">New Thing</Link></li>
          <li><Link to="/find">Search Thing</Link></li>
        </ul>
      </div>
    )
  }
}
