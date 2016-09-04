var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('../styles/Search.css');

function Search(props) {
    return (
        <div className="search-textbox">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for.." />
                <span className="input-group-btn">
                    <Link to='/home/search' className="btn btn-warning">
                        <i className='fa fa-search fa-lg' aria-hidden="true"></i>
                    </Link>
                </span>
            </div>
        </div>
    );
}

module.exports = Search;
