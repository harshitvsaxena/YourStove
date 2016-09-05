var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('../styles/Card.css');

function Card(props) {
    return (
        <div className="movie-card">
            <div className="box-container">
                <a href="#">
                    <img 
                        src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/454262/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE%40._V1_SY1000_CR0%2C0%2C678%2C1000_AL_.jpg"}
                        alt="cover" 
                        className="cover" />
                </a>
                <div className="back-cover">
                    <img src={'#'} />
                    <div className="details">
                        <div className="title1">Breaking Bad <span>TV-14</span></div>
                        <div className="title2"> TV Series (2008–2013) </div>
                    </div>
                </div>
                <div className="about-movie">
                    <div className="colum-one">
                        <span className="likes">90 likes</span>
                        <div className="colum-catogary">
                            <span className="tag">Crime</span>
                            <span className="tag">Drama</span>
                            <span className="tag">Thriller</span>
                        </div>
                    </div>
                    <div className="colum-second">
                        <p> 
                            When chemistry teacher Walter White is diagnosed with Stage III cancer and given only two years to live, he decides he has nothing to lose.A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future...<a href="#">read more</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = Card;
