var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var History = ReactRouter.hashHistory;

//Routes address
var Main = require('../components/Main');

/* -- Users View -- */
var LandingPage = require('../components/LandingPage');
var Home = require('../components/Home');
var Page404 = require('../components/Page404');
var QuickCooks = require('../components/QuickCooks');
var QuickCooksBlog = require('../components/QuickCooksBlog'); /*When someone clicks on a particular quick cooks blog*/
var EatOuts = require('../components/EatOuts');
var EatOutsBlog = require('../components/EatOutsBlog'); /* When someone clicks on a particular eat outs blog*/
var Timeline = require('../components/Timeline');

/* -- Admin View -- */
var Admin = require('../components/admin/Admin');
var AdminLogin = require('../components/admin/AdminLogin'); /* Login for admin users */
var AdminList = require('../components/admin/AdminList'); /* Lists all the blogs in the interface */
var AdminAdd = require('../components/admin/AdminAdd'); /* To add a new blog */
var AdminModify = require('../components/admin/AdminModify'); /* To modify the already written blogs */

var routes = (
    <Router history={History} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path='/' component={Main}>
            <IndexRoute component={LandingPage} />
            <Route path='home' component={Home}>
                <Route path='timeline' header='Timeline' component={Timeline} />
                <Route path='quick-cooks' header='Quick Cooks' component={QuickCooks} />
                <Route path='quick-cooks-blog/:quick-cooks' header='Quick Cooks Blog'  component={QuickCooksBlog} />
                <Route path='eat-outs' header='Eat Outs' component={EatOuts} />
                <Route path='eat-outs-blog/:eat-outs' header='Eat Outs Blog' component={EatOutsBlog} />
            </Route>
            <Route path='admin' component={Admin}>
                <Route path='login' header='Admin Login' component={AdminLogin} />
                <Route path='list' header='Admin List' component={AdminList} />
                <Route path='add' header='Admin Add' component={AdminAdd} /> 
                <Route path='modify' header='Admin Modify' component={AdminModify} />
            </Route>
            <Route path="*" component={Page404} />
        </Route>
    </Router>
);

module.exports = routes;
