import React from 'react'

import TextField from './TextField'
import '../../styles/NewItem.scss'
import '@material/button/mdc-button.scss'

class NewItem extends React.Component {
  render() {
    return (
      <form className="new-item-form">
	<TextField type="text" id="item-label">Thing</TextField>
	<TextField type="text" id="container-label">Container</TextField>
	<TextField type="text" id="item-name">Item Name</TextField>
	<button className="submit-button mdc-button">Submit</button>
      </form>
    )
  }
}

export default NewItem
