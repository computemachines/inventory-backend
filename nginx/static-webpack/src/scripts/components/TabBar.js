import '../../styles/TabBar.scss'

import '@material/tabs/mdc-tabs.scss'

import React from 'react'
import {MDCTab, MDCTabFoundation} from '@material/tabs';
import {MDCTabBar, MDCTabBarFoundation} from '@material/tabs';
import Tab from './Tab'
import { withRouter, matchPath } from 'react-router-dom'

class TabBar extends React.Component {
  constructor(props) {
    super(props)
    this._ref = React.createRef()
    this.children = props.children
    this.location = props.location
  }
  componentDidMount() {
    this.mdc = new MDCTabBar(this._ref.current);
    this.mdc.listen("MDCTabBar:change", (detail)=>{
      console.log(detail)
    })
    this.children.forEach((child, i) => {
      const match = matchPath(this.location.pathname,
			      {path: child.props['to']})
      if(match) {
	console.log(match, child, i)
	this.mdc.activeTabIndex = i
      }
    })
    console.log(this.mdc.activeTabIndex)

  }
  componentWillUnmount() {
    this.mdc.destroy()
    console.log("tabbar unmounting")
  }
  render() {
    return (
	<nav ref={this._ref}
	     id="#my-mdc-tab-bar"
	     className='app-bar-tabs mdc-tab-bar'>
	  {this.children}
	  <span className='mdc-tab-bar__indicator'></span>
	</nav>
    )
  }
}

export default withRouter(TabBar)
