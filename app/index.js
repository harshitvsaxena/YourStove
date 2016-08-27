var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./config/routes');

/* --- Sentry Integration --- */
var Raven = require('raven-js');
var sentryKey = '9dcd41cc498c452895266de6b3d7bacd';
var sentryApp = '94323';
var sentryUrl = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;
Raven.config(sentryUrl).install();
/* --- Sentry - End --- */

ReactDOM.render(
    Routes,
    document.getElementById('app')
);

