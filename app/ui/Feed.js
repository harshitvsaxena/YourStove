//It will show feed for following pages
// quick-cooks, eat-outs, timeline
// Will get the list(array) of items and then iterate it and display

var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var LoadingBlogUI = require('../ui/LoadingBlog');

var Card = require('../ui/Card');

require('../styles/Feed.css');

function Feed(props) {
    if(props.isLoading === true) {
        return (
            <LoadingBlogUI /> 
        );
    }

    return (
        <div>
            <ul>
                {
                    props.content.map(function(currentValue, index, arr) {
                        return (
                            <li key={currentValue.id}>
                                <Card 
                                    content={currentValue}
                                />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

Feed.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    content: PropTypes.array.isRequired
};

module.exports = Feed;
