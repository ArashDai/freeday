var React = require('react');
var ListItem = require('./ListItem');
var Infinite = require('react-infinite');

var List = React.createClass({
    getInitialState: function() {
        return {
            elements: this.buildElements(1, 20),
            isInfiniteLoading: false
        }
    },

    buildElements: function(start, end) {
        var elements = [];
        for (var i = start; i < end; i++) {
            elements.push(<ListItem key={i} num={i}/>)
        }
        return elements;
    },

    handleInfiniteLoad: function() {
        var that = this;
        this.setState({
            isInfiniteLoading: true
        });
        setTimeout(function() {
            var elemLength = that.state.elements.length,
                newElements = that.buildElements(elemLength, elemLength + 1000);
            that.setState({
                isInfiniteLoading: false,
                elements: that.state.elements.concat(newElements)
            });
        }, 1500);
    },

    elementInfiniteLoad: function() {
        return <div className="infinite-list-item">
            Loading Events...
        </div>;
    },

    render: function() {
        return <Infinite elementHeight={20}
                         containerHeight={250}
                         infiniteLoadBeginBottomOffset={200}
                         onInfiniteLoad={this.handleInfiniteLoad}
                         loadingSpinnerDelegate={this.elementInfiniteLoad()}
                         isInfiniteLoading={this.state.isInfiniteLoading}
                         >
            {this.state.elements}
        </Infinite>;
    }
});

module.exports = List;