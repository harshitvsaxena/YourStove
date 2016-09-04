var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var LoadingUI = require('./Loading');

require('../styles/LandingPage.css');

function LandingPage(props) {
    
    if(props.isLoading === true) {
        return (
            <LoadingUI />
        );
    }

    return (
        <div>

            <nav className="landing-page-nav navbar navbar-default navbar-fixed-bottom">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand">
                            YourStove
                            <i className='fa fa-leaf fa-lg' aria-hidden="true"></i>
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to='/home/about'>About</Link></li>
                            <li><Link to='/home/contact'>Contact</Link></li>
                            <li><Link to='/admin/login'>Admin</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li id='navbar-youtube'>
                                <a href="https://www.youtube.com/channel/UCE2Cuu7x1l5Ag0eZYHu7v-Q" target="_blank">
                                    <i className="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li id='navbar-facebook'>
                                <a href="https://www.facebook.com/ystraveldiaries/" target="_blank">
                                    <i className="fa fa-facebook-official fa-lg" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li id='navbar-instagram'>
                                <a href="https://www.instagram.com/yourstove/" target="_blank">
                                    <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <video poster={"./app/videos/teaser.png"} id="bgvid" loop autoPlay>
                <source src={'./app/videos/teaser.webm'} type="video/webm" />
                <source src={'./app/videos/teaser.mp4'} type="video/mp4" />
            </video>

            <div className="container" id='content'>
                <div className="row">
                    <div className="top-show col-md-6 col-sm-6 col-xs-12">
                        <Link to='/home/quick-cooks'>
                            Quick Cooks
                        </Link>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <Link to='/home/eat-outs'>
                            Eat Outs
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

LandingPage.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

module.exports = LandingPage;
