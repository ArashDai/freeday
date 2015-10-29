var React = require('react');
var TopBox = require('./components/TopBox');
var CategoryBar = require('./components/CategoryBar');
var SearchBar = require('./components/SearchBar');
var BottomBox = require('./components/BottomBox');
var List = require('./components/List');
var Map = require('./components/Map');
// var Tab = require('./components/Tab');


var App = React.createClass({
  render: function(){
    return (
      <div>
        
        {this.props.children}
        
        <TopBox/>
      
        <CategoryBar/>
      
        <Map/>

        <h1 className='col-xs-offset-6 col-sm-offset-1'>Upcoming Events</h1>
        
        <List/>
        
        <BottomBox/>
        
      </div>
    );
  }
});

        // <div>
        //   <SearchBar/>
        //   <br></br>
        // </div> 

//App = Radium(App);

//Radium in-line styling

React.render(<App/>, document.getElementById('main'));

