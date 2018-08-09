import '../../styles/ListItem.scss'

import React from 'react'
import $ from 'jquery'

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.item = props.item
    this.state = {
      showDetail: false,
      editing: false,
    }
    this.listItemClicked = this.listItemClicked.bind(this)
    this.editClicked = this.editClicked.bind(this)
    this.deleteClicked = this.deleteClicked.bind(this)
    this.cancelClicked = this.cancelClicked.bind(this)
    this.confirmClicked = this.confirmClicked.bind(this)
    this.listItemHoverOff = this.listItemHoverOff.bind(this)
    this.showDetail = this.showDetail.bind(this)
    this.hideDetail = this.hideDetail.bind(this)
    
    this._details_ref = React.createRef()
  }

  showDetail() {
    if (!this.state.showDetail) {
      this.setState({showDetail: true})
      $(this._details_ref.current).slideDown()
    }
  }

  hideDetail() {
    if (this.state.showDetail) {
      this.setState({showDetail: false})
      $(this._details_ref.current).slideUp()
    }
  }
  
  listItemClicked(e) {
    this.showDetail()
  }
  listItemHoverOff(e) {
    if (!this.state.editing) {
      this.hideDetail()
    }
  }
  
  editClicked(e) {
    e.preventDefault()
    e.stopPropagation()
    this.setState({editing: true})
    this.showDetail()
  }
  deleteClicked(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log("TODO")
  }
  cancelClicked(e) {
    e.preventDefault()
    e.stopPropagation()

    this.setState({editing: false})
  }
  confirmClicked(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log("TODO")
  }
  render() {
    const item = this.item

    const link = (name, handler) => (
      <li><a href="#" onClick={handler}>{name}</a></li>)

    const cancel = link("Cancel", this.cancelClicked)
    const confirm = link("Confirm", this.confirmClicked)
    const edit = link("Edit", this.editClicked)
    const deleteLink = link("Delete", this.deleteClicked)
    
    return (
      <li key={item['_id']['$oid']}
	  onClick={this.listItemClicked}
	  onMouseLeave={this.listItemHoverOff}
	  className="list-item">
	<div className="list-item--top-line">
	  <ul>
	    {
	      this.state.editing ?
		[cancel,
		 confirm]
		: edit
	    }
	    { deleteLink }
	  </ul>
	  <h3>{item.name}</h3>
	</div>
	<div ref={this._details_ref}
	     className="list-item--details">
	  <span className="list-item--field-name">Location Label</span>
	  <span className="list-item--field-value">{item.bin}</span>
	  <span className="list-item--field-name">Item Label</span>
	  <span className="list-item--field-value">{item.label}</span>
	</div>
      </li>
    )
  }
}

export default ListItem
