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
                                <img src='' alt='YourStove Logo' />
                            </p>
                            <ul className="header-menu">
                                <Link to='/home'><li className="menuActive">Home</li></Link>
                                <Link to='/home/quick-cooks'><li>Quick Cooks</li></Link>
                                <Link to='/home/eat-outs'><li>Eat Outs</li></Link>
                                <Link to='/home/gallery'><li>Gallery</li></Link>
                                <Link to='/home/about'><li>About</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

module.exports = LeftMenu;
