var React = require('react');

var RadiumButton = React.createClass({
  render: function(){
    return (
      <button>
      {this.props.children}Hello
      </button>
    );
  }
});




module.exports = RadiumButton;