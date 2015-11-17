'use strict';

var React = require('react');

var boxStyle = {
  'height': '100px',
  'width': '100px'
};

var Box = React.createClass({

   getInitialState: function() {
		return {value: this.props.initialValue};
	},
	handleClick: function() {
		this.setState({value: this.state.value + 1});
	},
	
	
  'render': function onRender () {
    return (
      <button onClick={this.handleClick} style={boxStyle}>{this.state.value}</button>
    );
  }
});

React.render(<Box initialValue={1}/>, document.body);
