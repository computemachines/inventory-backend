import {mdcTabBar, mdcTab, mdcTabActive,
	mdcTabBarIndicator} from '@material/tabs/mdc-tabs.scss'
import {MDCTab, MDCTabBar, MDCTabFoundation} from '@material/tabs';

import  {appBarTabs} from '../../styles/TabBar.scss'

import React from 'react';

class TabBar extends React.Component {
  componentDidMount() {
    
  }
  componentWillUnmount() {
    console.log("tabbar unmounting")
  }
  render() {
    return (
      <nav id="basic-tab-bar" className={`${appBarTabs}`}>
	<a className={`${mdcTab} ${mdcTabActive}`} href="#one">Search</a>
	<a className={`${mdcTab}`} href="#two">New</a>
	<a className={`${mdcTab}`} href="#three">Move</a>
	<a className={mdcTab} href="#four">Audit</a>
	<span className={`${mdcTabBarIndicator}`}></span>
      </nav>
    )
  }
}

export default TabBar
