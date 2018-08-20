import React from 'react'

import TextField, {HelperText, Input} from '@material/react-text-field'
import '../../styles/NewItem.scss'
import '@material/button/mdc-button.scss'
import '../../styles/TextField.scss'
import "@material/react-floating-label/index.scss";
import "@material/react-line-ripple/index.scss";
import "@material/react-notched-outline/index.scss";
import '@material/react-text-field/index.scss';

import $ from 'jquery'

import {MDCSnackbar, MDCSnackbarFoundation} from '@material/snackbar';
import '@material/snackbar/mdc-snackbar.scss'

class NewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemLabelValue: '',
      containerLabelValue: '',
      itemNameValue: '',
      quantityValue: 1,
      notesValue: ''
    }
    this._snackbar_ref = React.createRef()
  }
  componentDidMount() {
    this.snackbar = new MDCSnackbar(this._snackbar_ref.current)
  }
  render() {
    return (
      <React.Fragment>
	<form className="new-item-form" onSubmit={(e)=>{
	    e.preventDefault()
	    $.post({
	      url: "/api/things",
	      data: {label: this.state.itemLabelValue,
		     bin: this.state.containerLabelValue,
		     name: this.state.itemNameValue,
		     quantity: this.state.quantityValue,
		     notes: this.state.notesValue},
	      success: (data, status) => {
		this.snackbar.show(
		  {message: `Submitted ${data.name} in ${data.bin}`}
		)
		this.setState({
		  itemLabelValue: '',
		  containerLabelValue: '',
		  itemNameValue: '',
		  quantityValue: 1,
		  notesValue: ''
		})
	      },
	      error: (req, status, error) => {
		this.snackbar.show({
		  message: error
		})
	      },
	      dataType: 'json'
	    })
	  }}>
	  <TextField id="item-label"
		     className='text-field'
		     label='Thing'>
	    <Input
	      value={this.state.itemLabelValue}
	      onChange={(e)=>{
		console.log("value changed")
		this.setState({itemLabelValue: e.target.value})
	      }}/>
	  </TextField>
	  <TextField id="container-label" label='Container' className='text-field'>
	    <Input
	      value={this.state.containerLabelValue}
	      onChange={(e)=>{
		console.log("value changed")
		this.setState({containerLabelValue: e.target.value})
	      }}/>
	  </TextField>
	  <TextField id="item-name" label='Item Name' className='text-field'>
	    <Input
	      value={this.state.itemNameValue}
	      onChange={(e)=>{
		console.log("value changed")
		this.setState({itemNameValue: e.target.value})
	      }}/>
	  </TextField>
	  <TextField id="quantity-label" label="Quantity" className="text-field">
	    <Input
	      value={this.state.quantityValue}
	      onChange={(e)=>{
		console.log("value changed")
		this.setState({quantityValue: e.target.value})
	      }}/>
	  </TextField>
	  <TextField id="notes-label" label="Notes" className="text-field">
	    <Input
	      value={this.state.notesValue}
	      onChange={(e)=>{
		console.log("value changed")
		this.setState({notesValue: e.target.value})
	      }}/>
	  </TextField>
	  <button className="submit-button mdc-button">Submit</button>
	</form>
	<div ref={this._snackbar_ref}
	     className="mdc-snackbar"
	     aria-live="assertive"
	     aria-atomic="true"
	     aria-hidden="true">
	  <div className="mdc-snackbar__text"></div>
	  <div className="mdc-snackbar__action-wrapper">
	    <button type="button" className="mdc-snackbar__action-button"></button>
	  </div>
	</div>
      </React.Fragment>
    )
  }
}

export default NewItem
