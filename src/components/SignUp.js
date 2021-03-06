
var React = require('react');
var $ = require('jquery');
var AppDispatcher = require('../flux/Dispatcher');
//require jquery and use it to send post request

//For users signing up for app.
var SignUp = React.createClass({
 getInitialState: function () {
   return {
     userInput: ''
   };
 },

  handleSubmit:function(e){
    e.preventDefault();
    var userInput = {};
    var signUpDom = React.findDOMNode(this);
    userInput.username = $('#username').val();
    userInput.password = $('#password').val();
   
    $.post('/signup', userInput, function () {
      localStorage.setItem('jwt', jwt);
      location.reload();
      userInput = {};
    });
  },

  handleLogout: function () {
    delete localStorage.jwt;
    location.reload();
  },

  handleSubmitEvent: function () {
   var userEvent = {};
   userEvent.name = $('#name').val();
   userEvent.description = $('#description').val();
   userEvent.location = $('#location').val();
   userEvent.time = Date.now();
   $.post('/post', userEvent, function () {
     userEvent = {};
   });
 },

	render: function(){
		
    // if (!localStorage.token && !localStorage.jwt) {
        return ( 
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Sign Up</label>
              <input type="text" placeholder= "username" id= "username" style={styles.input1}>
                {this.props.children}
                </input>
              <input type="password" placeholder= "password" id="password" style={styles.input2}>
                {this.props.children}
                </input>
              <button style={styles.base}>
                {this.props.children}Submit</button>
            </form> 

            <form onSubmit={this.handleSubmitEvent}>
                       <input type ='text' placeholder='Event Name' id='name'/>
                         <br></br>
                         <br></br>
                         <input type ='text' placeholder='Event Description' id='description'/>
                         <br></br>
                         <br></br>
                       <input type ='text' placeholder='Event Address' id='location'/>
                           <br></br>
                           <h4>Event Time: </h4>
                           <input type="datetime-local" name="eventtime" id='time'/>
                           <br></br>
                           <br></br>
                         <br></br>
                           <button type="submit">
                           Create Event
                           </button>
            </form>
          </div>  
        )
    //   }else{
    //   return (
    //     <div>
    //       <button onClick={this.handleLogout}>Logout</button>
    //     </div>
    //   )
    // }
  }

});



module.exports = SignUp;
