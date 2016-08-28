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
