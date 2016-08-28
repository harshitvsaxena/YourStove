//It will show feed for following pages
// quick-cooks, eat-outs, timeline
// Will get the list(array) of items and then iterate it and display

var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Card = require('../ui/Card');

function Feed() {
    return (
        <div>
            <Card />
        </div>
    );
}

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
