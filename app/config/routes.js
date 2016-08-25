var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var History = ReactRouter.hashHistory;

//Routes address
var Main = require('../components/Main');
var LandingPage = require('../components/LandingPage');
var Home = require('../components/Home');
var Page404 = require('../components/Page404');
var QuickCooks = require('../components/QuickCooks');
var QuickCooksBlog = require('../components/QuickCooksBlog'); /*When someone clicks on a particular quick cooks blog*/
var EatOuts = require('../components/EatOuts');
var EatOutsBlog = require('../components/EatOutsBlog'); /* When someone clicks on a particular eat outs blog*/
var Search = require('../components/Search');

var routes = (
    <Router history={History}>
        <Route path='/' component={Main}>
            <IndexRoute component={LandingPage} />
            <Route path='home' component={Home}>
                <Route path='quick-cooks' header='Quick Cooks' component={QuickCooks} />
                <Route path='quick-cooks-blog/:quick-cooks' component={QuickCooksBlog} />
                <Route path='eat-outs' header='Eat Outs' component={EatOuts} />
                <Route path='eat-outs-blog/:eat-outs' component={EatOutsBlog} />
                <Route path='search' component={Search} />
            </Route>
            <Route path="*" component={Page404} />
        </Route>
    </Router>
);

module.exports = routes;
