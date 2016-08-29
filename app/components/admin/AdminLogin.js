var React = require('react');
var AdminLoginUI = require('../../ui/admin/AdminLogin');

var AdminLogin = React.createClass({
    render: function() {
        return (
            <div>
                <AdminLoginUI />
            </div>
        );    
    }    
});

module.exports = AdminLogin;
