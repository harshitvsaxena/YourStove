var React = require('react');
var LandingPageUI = require('../ui/LandingPage'); 

var LandingPage = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true
        };
    },
    componentDidMount: function() {
        this.setState({
            isLoading: false
        });
    },
    render: function() {
        return (
            <div>
                <LandingPageUI isLoading={this.state.isLoading} />
            </div>
        );
    }
});

module.exports = LandingPage;
