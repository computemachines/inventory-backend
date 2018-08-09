import '../../styles/AuditItems.scss'

import React from 'react'
import $ from 'jquery'

// import '@material/list/mdc-list.scss'

import ListItem from './ListItem'
// import ItemDetails from './ItemDetails'

class AuditItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    this.refreshList()
  }
  refreshList() {
    console.log("start refresh")
    $.ajax({
      url: '/api/things',
      success: (data) => {
	console.log(data)
	this.setState({items: JSON.parse(data)})
      }
    })
  }
  render() {
    console.log("render")
    console.log(this.state)
    const listItems = this.state.items.map((item, i) => {
      return <ListItem item={item}/>
    })

    return (
      <React.Fragment>
	<ul>
	  {listItems}
	</ul>
      </React.Fragment>
    )
  }
}


export default AuditItems
