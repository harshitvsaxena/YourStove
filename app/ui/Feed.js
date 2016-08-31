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

    //Change it - do it using props
    var dataArray = [0,1,2,3];
    return (
        <div>
            <ul>
                {
                    dataArray.map(function() {
                        return <li><Card /></li>
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

/*            <List>
 *             +                {
 *              +                    thousandElements.map(function() {
 *               +                        return <Card 
 *                +                                coverImg={} 
 *                 +                                profileImg={}
 *                  +                                title1={}
 *                   +                                title2={}
 *                    +                                likes={}
 *                     +                                tags={[tag1,tag2,tag3]}
 *                      +                                detailText={}/>
 *                       +                    })
 *                        +                }
 *                         +            </List>
 *                          +*/
