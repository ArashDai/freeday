var React = require('react');
var TopBox = require('./components/TopBox');
var CategoryBar = require('./components/CategoryBar');
var SearchBar = require('./components/SearchBar');
var BottomBox = require('./components/BottomBox');
var List = require('./components/List');
var Map = require('./components/Map');
// var Tab = require('./components/Tab');
var Radium = require('radium');

var App = React.createClass({
  render: function(){
    return (
      <div id="main">
      {this.props.children}
        <div>
          <TopBox/>
        </div>

        <div>
           <CategoryBar/>
         </div>
        <br></br>

        <div>
          <Map/>
        </div>
        
        <h1>
          Event List
        </h1>
        <div>
          <List/>
        </div>

        <div>
          <BottomBox/>
        </div>

      </div>
    );
  }
});

        // <div>
        //   <SearchBar/>
        //   <br></br>
        // </div> 

App = Radium(App);

//Radium in-line styling

React.render(<App/>, document.getElementById('main'));

