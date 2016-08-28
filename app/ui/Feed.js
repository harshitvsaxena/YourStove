//Will show mixed feed of quick-cooks and eat-outs
//But when search is enter it will show search result
//If on  page quick-cooks and eat-outs then it will show their respective feed
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
