import '../../styles/ItemDetails.scss'

import "@material/textfield/mdc-text-field.scss"
import "@material/floating-label/mdc-floating-label.scss"

import React from 'react'
import _ from 'lodash'
import {MDCFloatingLabel} from '@material/floating-label';

const Comment = () => null

// Component 
class ItemDetails extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.item)
    const fields = []
    for (let key in this.props.item) {
      if (key == '_id')
	continue
      fields.push(<DetailField editable={this.props.editable}
		        name={key} value={this.props.item[key]}/>)
    }
    return (
      <form>
	{fields}
      </form>
    )
  }
}

class DetailField extends React.Component {
  constructor(props) {
    super(props)
    this._floatingLabel_ref = React.createRef()
  }
  componentDidMount() {
    this._floatingLabel = new MDCFloatingLabel(this._floatingLabel_ref.current)
    // this._input_id = _.uniqueId()
  }
  componentWillUnmount() {
    
  }
  render() {
    let inputClassName = "mdc-text-field__input"
    let inputProps = {}
    if (this.props.editable) {
      inputProps = {placeholder: this.props.value}
    } else {
      inputProps = {value: this.props.value}
      inputClassName += " mdc-text-field--disabled"
    }

    return ( 
	<label className="mdc-text-field mdc-text-field--upgraded">
	<input type="text" id={this._input_id} className={inputClassName} {...inputProps}/>
	<span ref={this._floatingLabel_ref} className="mdc-floating-label mdc-floating-label--float-above">{this.props.name}</span>
	{this.props.editable && <div className="mdc-line-ripple"></div>}
      </label>
    )
  }
}

export default ItemDetails
