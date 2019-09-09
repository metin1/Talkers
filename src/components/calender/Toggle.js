import React from 'react'
import './calender.css'
import {button} from 'react-bootstrap'

const butStyle = {
  width: '100%',
  height: '35px',
  background: '#008CBA',
  fontsize: '12px',
  color: 'white',
  paddind:"1px:1px:1px:1px",
  margin:"1px"
};

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick() {
		this.setState(function(prevState) {
			return {isToggleOn: !prevState.isToggleOn};
		});
	}
	
	// ES6 -------
	// handleClick() {
	// 	this.setState(prevState => ({
	// 		isToggleOn: !prevState.isToggleOn
	// 	}));
	// }

  render() {
    return (
      <button className="waves-effect waves-light btn" style={butStyle} onClick={this.handleClick}>
        {this.state.isToggleOn ? 'AÇIK' : 'KAPALI'}
      </button>
    );
  }
}

export default Toggle
