var React = require('react');
var PropTypes = React.PropTypes;

function AdminLogin(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-4 col-sm-3 col-xs-2"></div>
                <div className="col-md-4 col-sm-6 col-xs-8 text-center">
                    <h1>Login</h1>
                    <form onSubmit={props.onSubmitLogin}>
                        <input className='form-control' type='text' placeholder='Username' onChange={props.onUpdateUsername} value={props.username} />
                        <br />
                        <input className='form-control' type='password' placeholder='Password' onChange={props.onUpdatePassword} value={props.password}  />
                        <br />
                        <input className='btn btn-primary' type='submit' value='Login' />
                    </form>
                    <hr />
                </div> 
                <div className="col-md-4 col-sm-3 col-xs-2"></div>
            </div>
        </div>
    );
}

AdminLogin.propTypes = {
    onUpdateUsername: PropTypes.func.isRequired,
    onUpdatePassword: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onSubmitLogin: PropTypes.func.isRequired
};

module.exports = AdminLogin;
