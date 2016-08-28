var React = require('react');
var Feed = require('../ui/Feed');

var QuickCooks = React.createClass({
    render: function() {
        return (
            <div>
                <Feed />
            </div>
        );    
    }    
});

module.exports = QuickCooks;
