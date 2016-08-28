var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('../styles/Search.css');

function Search(props) {
    return (
        <div className="search-textbox">
            <input type='text' className='form-control' placeholder='Search' />
        </div>
    );
}

module.exports = Search;
