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
		if(this.state.value=='X')
			{this.setState({value: 'O'});}
		else{
			this.setState({value: 'X'});
		}
	},
	
	
  'render': function onRender () {
    return (
      <button onClick={this.handleClick} style={boxStyle}>{this.state.value}</button>
    );
	
  }
});

React.render(<Box initialValue='X'/>, document.body);
