var React = require('react');
var CategoryItems = require('./CategoryItems');

var CategoryBar = React.createClass({//will contain individual category items from CategoryItems.
	render: function(){
		return (
      <div>
      CategoryBar:
      <CategoryItems/>
      </div>
		)
	}
});

module.exports = CategoryBar;