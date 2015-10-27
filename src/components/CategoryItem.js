var React = require('react');


//individual categories that will fit into CategoryBar component and apply filter.
var CategoryItem = React.createClass({
	render: function(){
		return (
      <div className="row">
        
          
       
          <button className="fa fa-music categoryItem col-xs-6 col-sm-1 col-sm-offset-2" >
          {this.props.children} Music
          </button>
        
        
          <button className="fa fa-gamepad categoryItem col-xs-6 col-sm-1">
          {this.props.children} Video Gaming
          </button>
        
          <button className="fa fa-map-pin categoryItem col-xs-6 col-sm-1">
          {this.props.children} Board Gaming
          </button>
      
        
          <button className="fa fa-users categoryItem col-xs-6 col-sm-1">
          {this.props.children} Social
          </button>
        
          <button className="fa fa-book categoryItem col-xs-6 col-sm-1" >
          {this.props.children} Educational
          </button>
       
          <button className="fa fa-heart categoryItem col-xs-6 col-sm-1">
           {this.props.children} Romantic
           </button>
        
          <button className="fa fa-soccer-ball-o categoryItem col-xs-6 col-sm-1" >
          {this.props.children} Athletic</button>
        
          <button className="fa fa-rocket categoryItem col-xs-6 col-sm-1" >
          {this.props.children} Other
          </button>
      
      </div>
		)
	}
});



module.exports = CategoryItem;