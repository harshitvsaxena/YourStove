/*Do not change this file. This is the main container of all the components */
var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../styles/PageSwitch.css');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="appear"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                        {React.cloneElement(this.props.children, {key: this.props.location.pathname})} 
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

module.exports = Main;
