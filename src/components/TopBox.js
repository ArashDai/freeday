var React = require('react');
var Modal = require('react-modal');
var CreateEvent = require('./CreateEvent');
var SignUp = require('./SignUp');
var LogIn = require('./LogIn');

// Top of the page, with CreateEvent, login/user & logo/title. 
//Will pull from createevent/login/register components. 

var TopBox = React.createClass({
	render: function(){
		return (
      <div id="topbox">
      {this.props.children}
      <h1 className="col-xs-6 col-xs-offset-5" ><a href=''>freeday</a></h1>

        <CreateEvent/> 

        
        <LogIn/>

        

      </div>
		)
	}
});

   //<SignUp/>
   //<LogIn/> 



module.exports = TopBox;