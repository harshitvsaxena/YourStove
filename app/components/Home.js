var React = require('react');

var ToggleHeader = require('../ui/ToggleHeader');
var LeftMenu = require('../ui/LeftMenu');
var Search = require('../ui/Search');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../styles/PageSwitch.css');

require('../styles/Home.css');

var Home = React.createClass({
    renderJQuery: function() {

        //Logic for toggle navbar + side header
        var isClosed;
        var navbarLeftSize = $("#left-menu-navbar").width();
        $(document).ready(function() {
            //Fix for all the screen sizes
            if(screen.width < screen.height) {
                navbarLeftSize = screen.width * 0.75;
                $("#left-menu-navbar").css("width", navbarLeftSize);
                $("#left-menu-navbar").css("margin-left", -navbarLeftSize);
                $("#navbar-toggle-button").css("display", "block");
                $(".content").css("padding-left","0px");
                isClosed = true;
            } else {
                //Default
                navbarLeftSize = 250;
                $("#left-menu-navbar").css("width", navbarLeftSize);
                $("#left-menu-navbar").css("margin-left", "0");
                $("#navbar-toggle-button").css("display", "none");
                $(".content").css("padding-left",navbarLeftSize);
                isClosed = false;
            }

            $("#nav-toggle").click(function() {
                this.classList.toggle( "active" );
                if(isClosed) {
                    $("#left-menu-navbar").animate({
                        marginLeft: 0
                    }, 300);
                    isClosed = false;
                } else {
                    $("#left-menu-navbar").animate({
                        marginLeft: -navbarLeftSize
                    }, 300);
                    isClosed = true;
                }
            });

        });
        $(window).resize(function() {
            if(screen.width < screen.height) {
                navbarLeftSize = screen.width * 0.75;
                $("#left-menu-navbar").css("width", navbarLeftSize);
                $("#left-menu-navbar").css("margin-left", -navbarLeftSize);
                $("#navbar-toggle-button").css("display", "block");
                $(".content").css("padding-left","0px");
                if(!isClosed) {
                    var that = document.getElementById("nav-toggle");
                    that.classList.toggle( "active" );
                    isClosed = true;
                }
            } else {
                //Default
                navbarLeftSize = 250;
                $("#left-menu-navbar").css("width", navbarLeftSize);
                $("#left-menu-navbar").css("margin-left", "0");
                $("#navbar-toggle-button").css("display", "none");
                $(".content").css("padding-left", navbarLeftSize);
                if(!isClosed) {
                    var that = document.getElementById("nav-toggle");
                    that.classList.toggle( "active" );
                }
            }
        });

    },
    componentDidMount: function() {
        this.renderJQuery();
    },
    render: function() {
        return (
            <div>
                <ToggleHeader />
                <LeftMenu location={this.props.location.pathname} />
                <section className='content'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-sm-1 hidden-xs"></div>
                            <div className="col-md-8 col-sm-10 col-xs-12">
                                <Search />
                                <ReactCSSTransitionGroup
                                    transitionName="appear"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={500}>
                                        {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                                </ReactCSSTransitionGroup>
                            </div>
                            <div className="col-md-2 col-sm-1 hidden-xs"></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});

module.exports = Home;
