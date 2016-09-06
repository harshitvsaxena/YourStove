var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('../styles/Card.css');

function Card(props) {
    return (
        <div className="movie-card">
            <div className="box-container">
                <Link to="#">
                    <img 
                        src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/454262/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE%40._V1_SY1000_CR0%2C0%2C678%2C1000_AL_.jpg"}
                        alt="cover" 
                        className="cover" />
                </Link>
                <div className="back-cover">
                    <img src={props.content.coverPic} />
                    <div className="details">
                        <div className="title1">{props.content.title} <span>{props.content.label}</span></div>
                        <div className="title2"> {props.content.publishDate} </div>
                    </div>
                </div>
                <div className="about-movie">
                    <div className="colum-one">
                        <span className="likes">{props.content.likes} likes</span>
                        <div className="colum-catogary">
                            <span className="tag">{props.content.category[0]}</span>
                            <span className="tag">{props.content.category[1]}</span>
                            <span className="tag">{props.content.category[2]}</span>
                        </div>
                    </div>
                    <div className="colum-second">
                        <p> 
                            {props.content.shortDescription}
                            &nbsp;<Link to='#'>read more...</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    content: PropTypes.object.isRequired
};

module.exports = Card;
