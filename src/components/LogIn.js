var React = require('react');
var $ = require('jquery');
var Modal = require('react-modal');



var LogIn = React.createClass({//For users logging into app. Will feed into TopBox component. Needs authorization/authentication.
  getInitialState:function(){
    return { modalIsOpen: false, value: "Login Something Something" };

  },
  openModal: function() {
        this.setState({modalIsOpen: true});
  },

  closeModal: function() {
      this.setState({modalIsOpen: false});
  },

  handleChange: function(event){
      this.setState({value: event.target.value});
    },

  handleSubmit:function(e){
    e.preventDefault();
    var userInput = {};
    var LoginDom = React.findDOMNode(this);
    
    userInput.username = LoginDom.firstChild.children[1].value;
    userInput.password = LoginDom.firstChild.children[2].value;
    
    var jsonifiedInput = JSON.stringify(userInput);
    var _this = this;

    $.ajax({
      url:"/login",
      type:"POST",
      data:jsonifiedInput,
      datatype:'json' ,
      contentType:'application/json',

      success: function(token){
        
        _this.setState({Authorization:"Bearer "+token})

        localStorage.Authorization = _this.state.Authorization

        console.log("this is the something that i am looking for: ",token);
        
      },
      error: function(xhr,ajaxOptions,err){
        alert("error",err);
        console.log(err);
        console.log(xhr.status);
      }
    });

   }, 

   handleFacebook: function () {

    // $.ajax({
    //   url:"/auth/facebook",
    //   type:"GET",
    //   success: function(jwt){
    //     console.log(jwt, 'sjfsdlkj');
    //     //send something from server to client on successful transaction
    //     //i think this is where i need to pass the token to the user's header
    //     window.localStorage.setItem('jwt', jwt);
    //     location.reload();
        
    //   },
    //   error: function(xhr,ajaxOptions,err){
    //     alert("error",err);
    //     console.log(err);
    //     console.log(xhr.status);
    //   }
    // });

   }, 


	render: function(){

      return (
        <div> 
          <button type="default-primary" onClick={this.openModal} >
      {this.props.children}LogIn</button>
            <Modal className="col-xs-12 col-sm-6 col-sm-offset-3"
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal} 
            >
           
          <button className="col-xs-offset-11" onClick={this.closeModal}>Close</button> 
            <br></br>
            <br></br>
            <br></br>
            <form onSubmit={this.handleSubmit} className="col-xs-offset-3">
              <input type="text" placeholder= "username" >
                {this.props.children}
              </input>
              <input type="password" placeholder= "password" >
                {this.props.children}
              </input>
              <button className="col-xs-offset-1" > {this.props.children}Submit</button>
            </form>

          
              
              <br></br>
              <div className='row col-xs-offset-4'>
                <a href="/auth/facebook" className="btn btn-primary" ><span className="fa fa-facebook"></span> Facebook</a>
                <button className="btn btn-primary">{this.props.children}G-Mail</button>
              </div>
            </Modal>
        </div>
      )
   
	}
});


module.exports = LogIn;