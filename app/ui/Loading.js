var React = require('react');
var PropTypes = React.PropTypes;

require('../styles/Loading.css');

function Loading(props) {
    return (
        <div className="container loader">
            <div className="row">
                <p><img src={'./app/img/loader.gif'} alt='Loading ..' /></p>
            </div>
        </div>
    );
}

module.exports = Loading;
