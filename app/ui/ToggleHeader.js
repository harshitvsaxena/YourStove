var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('../styles/ToggleHeader.css');

function ToggleHeader(props) {
    return (
        <header>
            <nav className="navbar navbar-default" id="navbar-toggle-button">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" id="nav-toggle"><span></span></a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

module.exports = ToggleHeader;

