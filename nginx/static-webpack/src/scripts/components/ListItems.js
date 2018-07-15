import React from 'react'

import $ from 'jquery'

import '@material/list/mdc-list.scss'
import "@material/typography/mdc-typography.scss"


class ListItems extends React.Component {
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
    return (
      <React.Fragment>
	<h1 className="mdc-typography">All Items</h1>
	<ul className='mdc-list'>
	  {this.state.items.map((item, i) => {
	    return <li key={item['_id']['$oid']}
			 className='mdc-list-item'>{item['name']}</li>
	  })}
	</ul>
      </React.Fragment>
    )
  }
}


export default ListItems
