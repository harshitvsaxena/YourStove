var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var LoadingUI = require('./Loading');

function LandingPage(props) {
    
    if(props.isLoading === true) {
        return (
            <LoadingUI />
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <Link to='/home/quick-cooks'>
                        Quick Cooks
                    </Link>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <Link to='/home/eat-outs'>
                        Eat Outs
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <h1>Newsletter</h1>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <h1>Calender</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <h1>Gallery</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <h1>Footer</h1>
                    <Link to='/admin/login'>Admin</Link>
                </div>
            </div>
        </div>
    );
}

LandingPage.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

module.exports = LandingPage;
