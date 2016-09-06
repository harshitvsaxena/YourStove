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
        var that = this;
        $.ajax({
            url: 'http://localhost:8124/get_all_eat_outs',
            method: 'GET',
            success: function(data) {
                if (data.status) {
                    if (data.data.length) {
                        that.setState({
                            isLoading: false,
                            content: data.data
                        });
                        console.log(that.state.content);
                    } else {
                        alert('There is no blog in our database yet in this category.\nPlease write to us at contact@yourstove.in \nThank you for your support.');
                    }
                } else {
                    alert('Please check your connection. And refresh the page.');
                }
            }
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
