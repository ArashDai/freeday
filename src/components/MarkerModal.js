var React = require('react');
var Modal = require('react-modal');


var appElement = document.getElementById('main');

Modal.setAppElement(appElement);
Modal.injectCSS();

var MarkerModal = React.createClass({
    getInitialState: function(){
      return { modalIsOpen: false, value: "Comments will go here" }; 
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
      return (
        <div>
          <button onClick={this.openModal} >
          {this.props.children}</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal} 
            >
            <button onClick={this.closeModal}>Close</button>
          <h1>{this.props.singleEvent.name}</h1>
          <h2>{this.props.singleEvent.time}</h2>
          <h3>Confirmed Attendance: {this.props.singleEvent.confirmed}</h3>
          <h3> Distance: {this.props.singleEvent.distance} <a href={this.props.singleEvent.url}>(Click link for address)</a></h3>
                <br></br>
                <br></br>
                <br></br>
              <div> 
                <button>I Will Attend</button>
                <button>I Might Attend</button>
                <button>Hide Event</button>
              </div>
                <br></br>
                <br></br>
            <div dangerouslySetInnerHTML={{__html: this.props.singleEvent.description}} />
                <br></br>
              <form id="comments" >
                <input type ='text' placeholder='Leave a Comment' onChange={this.handleChange}/>
                <button onClick={this.handleChange}>Submit</button>
                <div>{this.state.value}</div>
            </form>
            <h3><a href={this.props.singleEvent.url} >{this.props.singleEvent.url}</a></h3>
              <br></br>
              <br></br>
          </Modal>
        </div>
      );
    }
});



module.exports = MarkerModal;
