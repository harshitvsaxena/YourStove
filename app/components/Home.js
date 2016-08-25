var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div>
                Hello from Home! -> place the header here
                {this.props.children} 
            </div>
        );    
    }    
});

module.exports = Home;
