var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function AdminLogin(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-4 col-sm-3 col-xs-2"></div>
                <div className="col-md-4 col-sm-6 col-xs-8">
                    <h1>Login</h1>
                    <input className='form-control' type='text' placeholder='Username' />
                    <br />
                    <input className='form-control' type='password' placeholder='Password' />
                    <br />
                    <input className='btn btn-primary' type='button' value='Login' />
                    <hr />
                </div> 
                <div className="col-md-4 col-sm-3 col-xs-2"></div>
            </div>
        </div>
    );
}

module.exports = AdminLogin;
