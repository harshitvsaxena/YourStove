/*Do not change this file. This is the main container of all the admin components */
var React = require('react');

var Admin = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Admin;
