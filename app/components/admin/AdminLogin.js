var React = require('react');
var AdminLoginUI = require('../../ui/admin/AdminLogin');
var AdminHeader = require('../../ui/admin/AdminHeader');

var AdminLogin = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return ({
            authenticated: false,
            username: '',
            password: ''
        });
    },
    handleUpdateUsername: function(e) {
        this.setState({
            username: e.target.value
        });
    },
    handleUpdatePassword: function(e) {
        this.setState({
            password: e.target.value
        });
    },
    handleSubmitLogin: function(e) {
        e.preventDefault();
        var username = this.state.username;
        var password = this.state.password;
        var that = this;
        $.ajax({
            url: 'http://localhost:8124/check_admin',
            method: 'POST',
            data: {username: username, password: password},
            success: function(data) {
                if (data.status) {
                    //console.log(data);
                    that.setState({
                        authenticated: true,
                        username: username
                    });
                    that.context.router.push({
                        pathname: '/admin/login/list'
                    });
                } else {
                    alert('Credentials Wrong. \nTry Again!!!');
                }
            }
        });
    },
    render: function() {
        if (this.state.authenticated === false) {
            return (
                <div>
                    <AdminLoginUI 
                        onSubmitLogin = {this.handleSubmitLogin}
                        onUpdateUsername = {this.handleUpdateUsername}
                        onUpdatePassword = {this.handleUpdatePassword}
                        username = {this.state.username}
                        password = {this.state.password}
                    />
                </div>
            );   
        } 
        return (
            <div>
                <AdminHeader location={this.props.location.pathname} />
                {this.props.children}
            </div>
        );
    }    
});

module.exports = AdminLogin;
