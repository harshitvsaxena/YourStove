var React = require('react');
var Feed = require('../ui/Feed');
var ReactDOM = require('react-dom');

var EatOuts = React.createClass({
    render: function() {
        return (
            <div>
                <Feed />
            </div>
        );    
    }    
});

module.exports = EatOuts;
