import '@material/textfield/mdc-text-field.scss'
import '../../styles/TextField.scss'

import React from 'react'
import {MDCTextField} from '@material/textfield';

class TextField extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.ref = React.createRef()
  }
  componentDidMount() {
    console.log('textfield mounting')
    MDCTextField.attachTo(this.ref.current)
  }
  componentWillUnmount() {
    console.log('textfield unmounting')
  }
  render() {
    const {type, to} = this.props
    return (
      <div ref={this.ref}
	   className="text-field mdc-text-field mdc-text-field--outlined">
	<input className="mdc-text-field__input"
	       {...{type, to}}/>
	<label className="mdc-floating-label"
	       htmlFor={this.props.id}>{this.props.children}</label>
	<div className="mdc-notched-outline">
	  <svg>
	    <path className="mdc-notched-outline__path"/>
	  </svg>
	</div>
	<div className="mdc-notched-outline__idle"></div>
      </div>
    )
  }
}

export default TextField
