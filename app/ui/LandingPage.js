var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function LandingPage() {
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
                </div>
            </div>
        </div>
    );
}

module.exports = LandingPage;
