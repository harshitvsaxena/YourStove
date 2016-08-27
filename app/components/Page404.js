var React = require('react');
var Page404UI = require('../ui/Page404');

var Page404 = React.createClass({
    renderJQuery: function() {
        
    },
    componentDidMount: function() {
        this.renderJQuery();
    },
    render: function() {
        return (
            <div>
                <Page404UI />
            </div>
        );    
    }    
});

module.exports = Page404;
