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
      <button onClick={this.handleClick} style={boxStyle} value={this.state.value}>{this.state.value}</button>
	  
    );
	
  }
});

var Row = React.createClass({
	
	getInitialState: function() {
		return {value: this.props.initialValue};
	},
	
	'render': function onRender () {
    return (
    <div>  
		{this.props.list.map(function(result) {
           return <Box initialValue={result}/>;
        })}	
	</div>
	);
	}
});

React.render(<Row list={['_','_','_']}/>,document.body);

