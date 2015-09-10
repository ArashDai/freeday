var React = require('react');
var CreateEvent = require('./CreateEvent');
var SignUp = require('./SignUp');
var LogIn = require('./LogIn');
var Radium = require('radium');

// Top of the page, with CreateEvent, login/user & logo/title. 
//Will pull from createevent/login/register components. 

var TopBox = React.createClass({
	render: function(){
		return (
      <div style={styles.base}>
      {this.props.children}
      <h1><a href=''>freeday</a></h1>
        <CreateEvent/> 
        <SignUp/>
        <LogIn/> 
      </div>
		)
	}
});

var styles = {
  base: {
    background: 'lightsteelblue',
    padding: '2em',
    borderRadius: 8,
    marginTop: '1em',
  },
};

module.exports = Radium(TopBox);