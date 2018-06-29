import React from 'react'

import '@material/form-field/mdc-form-field.scss'
import '@material/checkbox/mdc-checkbox.scss'

class Form extends React.Component {
  render() {
    return (
      <div className="mdc-form-field">
	<div className="mdc-checkbox">
	  <input type="checkbox" id="my-checkbox" className="mdc-checkbox__native-control"/>
	  <div className="mdc-checkbox__background">
	    <svg className="mdc-checkbox__checkmark"
		 viewBox="0 0 24 24">
              <path className="mdc-checkbox__checkmark-path"
		    fill="none"
		    d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
	    </svg>
	    <div className="mdc-checkbox__mixedmark"></div>
	  </div>
	</div>
	<label htmlFor="my-checkbox">This is my checkbox</label>
      </div>
    )
  }
}

export default Form
