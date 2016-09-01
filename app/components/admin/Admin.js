/*Do not change this file. This is the main container of all the admin components */
var React = require('react');
require('../../styles/admin/Main.css');

var Admin = React.createClass({
    render: function() {
        return (
            <div id="main">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Admin;
