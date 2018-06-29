import '../../styles/TabBar.scss'

import '@material/tabs/mdc-tabs.scss'
import '@material/tabs'


import React from 'react'
import {MDCTab, MDCTabFoundation} from '@material/tabs';
import {MDCTabBar, MDCTabBarFoundation} from '@material/tabs';

class TabBar extends React.Component {
  constructor(props) {
    super(props)
    this._ref = React.createRef()
  }
  componentDidMount() {
    this.mdc = MDCTabBar.attachTo(this._ref.current);
  }
  componentWillUnmount() {
    this.mdc.destroy()
  }
  render() {
    return (
      <nav ref={this._ref}
	   id="#my-mdc-tab-bar"
	   className='app-bar-tabs mdc-tab-bar'>
	<a className='mdc-tab mdc-tab--active' href="#one">Search</a>
	<a className='mdc-tab' href="#two">New</a>
	<a className='mdc-tab' href="#three">Move</a>
	<a className='mdc-tab' href="#four">Audit</a>
	<span className='mdc-tab-bar__indicator'></span>
      </nav>
    )
  }
}

export default TabBar
