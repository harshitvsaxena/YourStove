//Will be shown if some one clicks home in the navbar
//Or if someone searches something in the search
//All the computation related to search as well as timeline feed will happen here

var React = require('react');
var Feed = require('../ui/Feed');

var Timeline = React.createClass({
    render: function() {
        return (
            <div>
                <Feed />
            </div>
        );
    }
});

module.exports = Timeline;
