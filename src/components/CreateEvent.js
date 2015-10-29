var React = require('react');
var Modal = require('react-modal');
var ImageUpload = require('./ImageUpload');

var appElement = document.getElementById('main');

Modal.setAppElement(appElement);
Modal.injectCSS();

var CreateEvent = React.createClass({
    getInitialState: function(){
      return { modalIsOpen: false, value: "Event description will go here." }; 
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

    render: function(){
      if(window.localStorage.Authorization){
      return (
        <div>
          <button type="default-primary" onClick={this.openModal} >
      {this.props.children}Create Event</button>
          <Modal id="loginModal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal} 
          >
          <button onClick={this.closeModal}>Close</button>
          <br></br>
          <br></br>
          <form>
            <h4>Event Name: </h4>
            <input type ='text' placeholder='Event Name'/>
              <button onClick={this.handleChange}>Submit</button>
              <br></br>
              <br></br>
            <input type ='text' placeholder='Event Address'/>
              <button onClick={this.handleChange}>Submit</button>
                <br></br>
                <h4>Event Time: </h4>
                <input type="datetime-local" name="eventtime"/>
                <br></br>
                <input type ='radio' name='Age Limit'/> Must be 21 or older?
                <br></br>

                <form>
                  <input type="number" name="attendees" min="1" max="25"/> Maximum Attendance
                </form>

              <br></br>
              <input type ='text' placeholder='Event Description'/>
                <button onClick={this.handleChange}>Submit</button>
          </form>
            <br></br>
            <br></br>
            <form>
              <div>{this.state.value}</div>
            </form>
              
              <ImageUpload/>
              <input type='file'/>

          </Modal>
        </div>
      );}
else
{
  return(<div></div>)
      }
    }
});



module.exports = CreateEvent;