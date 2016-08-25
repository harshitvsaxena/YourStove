var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./config/routes');

/* --- Sentry Integration --- */
var Raven = require('raven-js');
var sentryKey = 'SENTRY KEY';
var sentryApp = 'SENTRY APP ID';
var sentryUrl = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;
Raven.config(sentryUrl).install();
/* --- Sentry - End --- */

ReactDOM.render(
    Routes,
    document.getElementById('app')
);

