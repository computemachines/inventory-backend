import {Component} from 'react'
import PropTypes from 'prop-types'
import Barcode from 'react-icons/lib/fa/barcode'


function frac2Percent(num, denom) {
  return  (num * 100/denom).toFixed(2) + '%'
}

export class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {total: 0, goal: 100}
  }
  render() {
    let {total, goal} = this.state
    return (
      <div className="count">
	<Barcode
	  onClick={() => this.setState({total: this.state.total+1})}
	  style={{height: "6em", width: "6em"}}/>
	<div className="total">
	  {frac2Percent(total, goal)}
	</div>
      </div>
    )
  }
}
Counter.propTypes = {
  total: PropTypes.number,
  goal: PropTypes.number
}
