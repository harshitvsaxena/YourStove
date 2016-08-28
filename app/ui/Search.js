var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Card = require('../ui/Card');

require('../styles/Search.css');

function Search(props) {
    return (
        <div>
            <div className="search-textarea">
                <input type="text" className="form-control" placeholder="Search Here" />
            </div>
            <div className="search-content">
                <Card />
            </div>
        </div>
   );
}

module.exports = Search;

/*            <List>
                {
                    thousandElements.map(function() {
                        return <Card 
                                coverImg={} 
                                profileImg={}
                                title1={}
                                title2={}
                                likes={}
                                tags={[tag1,tag2,tag3]}
                                detailText={}/>
                    })
                }
            </List>
*/
