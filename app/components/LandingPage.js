var React = require('react');
var LandingPageUI = require('../ui/LandingPage'); 

var LandingPage = React.createClass({
    render: function() {
        return (
            <div>
                <LandingPageUI />
            </div>
        );
    }
});

module.exports = LandingPage;
