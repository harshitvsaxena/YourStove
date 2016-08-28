var React = require('react');
var SearchUI = require('../ui/Search');

var Search = React.createClass({
    render: function() {
        return (
            <div>
                <SearchUI />
            </div>
        );    
    }    
});

module.exports = Search;
