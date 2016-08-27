var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var Link = ReactRouter.Link;

require('../styles/Page404.css');

function Page404(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12 text-center'>
                    <h1>Error: 404</h1>
                    <Link to='/home'>
                        <input type='button' className='btn btn-default' value='Home' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

module.exports = Page404;
