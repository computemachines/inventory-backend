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

class NewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemLabelValue: '',
      containerLabelValue: '',
      itemNameValue: ''
    }
  }
  render() {
    return (
      <form className="new-item-form" onSubmit={(e)=>{
	  e.preventDefault()
	  $.post("/api/things",
		 {label: this.state.itemLabelValue,
		  bin: this.state.containerLabelValue,
		  name: this.state.itemNameValue},
		 (data, status) => {
		   console.log(data)
		 }, 'json')
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
	<button className="submit-button mdc-button">Submit</button>
      </form>
    )
  }
}

export default NewItem
