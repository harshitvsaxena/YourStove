/*Do not change this file. This is the main container of all the components */
var React = require('react');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.children} 
            </div>
        );
    }
});

module.exports = Main;
