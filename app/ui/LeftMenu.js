var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

require('../styles/LeftMenu.css');

function LeftMenu(props) {
    return (
        <section id='left-menu-navbar'>
            <nav className="navbar navbar-default">
                <div id="left-menu">
                    <div className="container-fluid">
                        <div id="navbar" className="header-inside">
                            <p className="logo-image">
                                <i className='fa fa-leaf fa-5x' aria-hidden="true"></i>
                            </p>
                            <ul className="header-menu">
                                <Link to='/'>
                                    <li>Home</li>
                                </Link>
                                <Link to='/home/quick-cooks'>
                                    <li className={props.location==='/home/quick-cooks'?"menuActive":""}>Quick Cooks</li>
                                </Link>
                                <Link to='/home/eat-outs'>
                                    <li className={props.location==='/home/eat-outs'?"menuActive":""}>Eat Outs</li>
                                </Link>
                                <Link to='/home/gallery'>
                                    <li className={props.location==='/home/gallery'?"menuActive":""}>Gallery</li>
                                </Link>
                                <Link to='/home/about'>
                                    <li className={props.location==='/home/about'?"menuActive":""}>About</li>
                                </Link>
                                <Link to='/home/contact'>
                                    <li className={props.location==='/home/contact'?"menuActive":""}>Contact</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

LeftMenu.propTypes = {
    location: PropTypes.string.isRequired
}

module.exports = LeftMenu;
