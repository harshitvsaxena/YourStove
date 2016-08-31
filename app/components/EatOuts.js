var React = require('react');
var Feed = require('../ui/Feed');

var EatOuts = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            content: []
        };
    },
    componentDidMount: function() {
        //insert the ajax call to get the feed and arrange it into content
        //this.state.content = [Something, something];
        this.state.content[0] = 'Hello';
        //when loading is done then set the isLoading to false 
        this.setState({
            isLoading: false
        });
    },
    render: function() {
        return (
            <div>
                <Feed 
                    isLoading={this.state.isLoading}  
                    content={this.state.content} />
            </div>
        );    
    }    
});

module.exports = EatOuts;
