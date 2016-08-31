var React = require('react');
var PropTypes = React.PropTypes;

require('../styles/LoadingBlog.css');


function LoadingBlog(props) {
    return (
        <div className="container loader-blog">
            <div className="row">
                <p><img src={'./app/img/blog_loader.gif'} alt='Loading ..' /></p>
            </div>
        </div>
    );
}

module.exports = LoadingBlog;
